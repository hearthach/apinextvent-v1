// utils
import { _mock } from './_mock';
import { _tags } from './assets';

// ----------------------------------------------------------------------

const COLORS = [
  '#00AB55',
  '#000000',
  '#FFFFFF',
  '#FFC0CB',
  '#FF4842',
  '#1890FF',
  '#94D82D',
  '#FFC107',
];

const DESCRIPTION = `
<h6>Especificaciones</h6>
<br/>
<ol>
  <li>Categoría:</li>
  <li>Polo</li>
</ol>

<br/>
<ol>
  <li>Hecho en:</li>
  <li>Zilex</li>
</ol>

<br/>
<ol>
  <li>Serial Number</li>
  <li>358607726380311</li>
</ol>

<br/>
<br/>

<h6>Detalles del Producto</h6>
<br/>
<ul>
  <li><p>Polo girasol 30/1</p></li>
  <li><p>Colección 🏔️Travel Maker🏕️</p></li>
  <li><p>Tallas y colores disponibles</p></li>
  <li><p>Colour Shown: White/Black/Oxygen Purple/Action Grape</p></li>
  <li><p>Limited Edition</p></li>
  <li><p>Hecho en Perú</p></li>
</ul>

<br/>
<br/>

<h6>Entrega y Devoluciones</h6>
<br/>
<p>Tu pedido de S/.200.00 o más obtiene envío estándar gratuito.</p>
<br/>
<ul>
  <li><p>Entrega estándar en 4-5 días hábiles.</p></li>
  <li><p>Entrega exprés en 2-4 días hábiles.</p></li>
</ul>
<br/>
<p>Los pedidos se procesan y entregan de lunes a viernes (excepto días festivos).</p>

`;

const SIZES = ['S','M','L','XL'];
// const SIZES = ['S','M','L','XL','6', '7', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12', '13'];

const ATTACHMENTS = [...Array(20)].map((_, index) => _mock.image.product(index));

const REVIEWS = [...Array(8)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.fullName(index),
  postedAt: _mock.time(index),
  comment: _mock.sentence(index),
  isPurchased: _mock.boolean(index),
  rating: _mock.number.rating(index),
  avatarUrl: _mock.image.avatar(index),
  helpful: _mock.number.nativeL(index),
  attachments:
    (index === 1 && ATTACHMENTS.slice(0, 1)) ||
    (index === 3 && ATTACHMENTS.slice(2, 4)) ||
    (index === 5 && ATTACHMENTS.slice(5, 8)) ||
    [],
}));

const NEW_LABELS = [...Array(20)].map((_, index) => ({
  enabled: [1, 2, 3].includes(index),
  content: 'NEW',
}));

const SALE_LABELS = [...Array(20)].map((_, index) => ({
  enabled: [4, 5].includes(index),
  content: 'SALE',
}));

const RATINGS = [...Array(5)].map((_, index) => ({
  name: `${index + 1} Star`,
  starCount: _mock.number.nativeL(index),
  reviewCount: _mock.number.nativeL(index + 1),
}));

const IMAGES = [...Array(8)].map((_, index) => _mock.image.product(index));

// ----------------------------------------------------------------------

export const _products = [...Array(21)].map((_, index) => {
  const publish = index % 3 ? 'published' : 'draft';

  // const category = (index % 2 && 'Shose') || (index % 3 && 'Apparel') || 'Accessories';

  const category =
  (index % 4 === 0 && 'Polos') ||
  (index % 4 === 1 && 'Poleras') ||
  (index % 4 === 2 && 'Shorts') ||
  (index % 4 === 3 && 'Jogger');

  const gender = (index % 2 && 'Men') || (index % 3 && 'Women') || 'Kids';

  const available = (index % 2 && 72) || (index % 3 && 10) || 0;

  const inventoryType = (index % 2 && 'in stock') || (index % 3 && 'low stock') || 'out of stock';

  const priceSale = index % 3 ? null : _mock.number.price(index);

  return {
    id: _mock.id(index),
    gender,
    publish,
    category,
    available,
    priceSale,
    taxes: 10,
    quantity: 80,
    sizes: SIZES,
    inventoryType,
    images: IMAGES,
    ratings: RATINGS,
    reviews: REVIEWS,
    tags: _tags.slice(0, 5),
    code: `38BEE27${index}`,
    description: DESCRIPTION,
    newLabel: NEW_LABELS[index],
    sku: `WW75K521${index}YW/SV`,
    createdAt: _mock.time(index),
    saleLabel: SALE_LABELS[index],
    name: _mock.productName(index),
    price: _mock.number.price(index),
    coverUrl: _mock.image.product(index),
    totalRatings: _mock.number.rating(index),
    totalSold: _mock.number.nativeM(index + 1),
    totalReviews: _mock.number.nativeL(index + 1),
    subDescription:
      'Con el diseño original inspirado en los ultimos estandares de modo, hecho con tela y algodon 100% Peruano.',
    colors:
      (index === 0 && COLORS.slice(0, 2)) ||
      (index === 1 && COLORS.slice(1, 3)) ||
      (index === 2 && COLORS.slice(2, 4)) ||
      (index === 3 && COLORS.slice(3, 6)) ||
      //
      (index === 4 && COLORS.slice(4, 6)) ||
      (index === 5 && COLORS.slice(5, 6)) ||
      (index === 6 && COLORS.slice(0, 2)) ||
      (index === 7 && COLORS.slice(4, 6)) ||
      //
      (index === 8 && COLORS.slice(2, 4)) ||
      (index === 9 && COLORS.slice(2, 6)) ||
      (index === 10 && COLORS.slice(3, 6)) ||
      (index === 11 && COLORS.slice(2, 6)) ||
      //
      (index === 12 && COLORS.slice(2, 7)) ||
      (index === 13 && COLORS.slice(4, 7)) ||
      (index === 14 && COLORS.slice(0, 2)) ||
      (index === 15 && COLORS.slice(5, 8)) ||
      //
      (index === 16 && COLORS.slice(4, 6)) ||
      (index === 17 && COLORS.slice(5, 6)) ||
      (index === 18 && COLORS.slice(0, 2)) ||
      (index === 19 && COLORS.slice(4, 6)) ||
      COLORS.slice(2, 6),
  };
});
