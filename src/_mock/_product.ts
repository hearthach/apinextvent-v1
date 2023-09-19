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
<h6>ESPECIFICACIONES</h6>
<ul>
  <li><p>Polo girasol 30/1</p></li>
  <li><p>Colección 🏔️Travel Maker🏕️</p></li>
  <li><p>Tallas y colores disponibles</p></li>
  <li><p>Colour Shown: White/Black/Oxygen Purple/Action Grape</p></li>
  <li><p>Limited Edition</p></li>
  <li><p>Hecho en Perú</p></li>
</ul>
<br/>
<h6>CAMBIOS Y DEVOLUCIONES</h6>
<ul>
  <li><p>En caso el producto se encuentre con un daño de origen, no
  dude en devolverlo dentro de los 30 días posteriores a su
  compra original. Entendemos que a veces las cosas simplemente
  no funcionan y eso está bien.</p></li>  
</ul>
<ul>
  <li><p>Para solicitar el cambio presentar el voucher de pago junto
  al numero de orden directo a nuestro WhatsApp 980589089.</p></li>
</ul>
<br/>
<h6>ENVÍOS</h6>
  <p>Todos nuestros envíos son realizados de Lunes a Sábado</p>
    <p><b>TODO LIMA:</b> (1 dia hábil)</p>
      <ul>
        <li>Los envíos a todo LIMA serán realizados por Olva courier, uno de nuestros 
        asesores se comunica con ud. para tratar el tema del costo de envio.
        </li>
      </ul>

    <p><b>PROVINCIAS:</b> (2 a 3 días habiles)</p>
      <ul>
        <li>El envío se realizará por la empresa Shalom Empresarial el costo de envío será con pago en destino.</li>
      </ul>

    <p><b>PROVINCIAS ALEJADAS:</b></p>
      <ul>
        <li>Provincias alejadas uno de nuestros asesores de venta 
        se comunicará con ud, para poder coordinar el envío por alguna otra empresa de su preferencia.</li>
      </ul>
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

// ETIQUETA NUEVOS PRODUCOS
const NEW_LABELS = [...Array(20)].map((_, index) => ({
  enabled: [1, 2, 3, 10, 11].includes(index),
  content: 'NUEVO',
}));

// ETIQUETAS MAS VENDIDOS
const SALE_LABELS = [...Array(20)].map((_, index) => ({
  enabled: [4, 5, 17, 18].includes(index),
  content: 'MÁS VENDIDO',
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
