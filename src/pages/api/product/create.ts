import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../utils/db';
import { ResultSetHeader } from 'mysql2';
import uuidv4 from '../../../utils/uuidv4'; // Asegúrate de que la ruta sea correcta
import cors from '../../../utils/cors'; // Asegúrate de que la ruta sea correcta

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  await cors(req, res);

    if (req.method === 'POST') {
      try {
        const products = Array.isArray(req.body) ? req.body : [req.body];
  
        const results = [];
        for (const product of products) {
            const {
              gender,
              publish,
              category,
              available,
              priceSale,
              taxes,
              quantity,
              sizes,
              inventoryType,
              images,
              tags,
              code,
              description,
              newLabel,
              sku,
              saleLabel,
              name,
              price,
              coverUrl,
              totalRatings,
              totalSold,
              totalReviews,
              subDescription,
              colors
            } = product;

      // Convertir los arreglos a cadenas de texto separadas por comas
      const sizesString = sizes.join(',');
        const imagesString = images.join(',');
        const tagsString = tags.join(',');
        const colorsString = colors.join(',');

      // Generar un UUID único para el producto
      const id = uuidv4();

      const [result] = await db.query<ResultSetHeader>(
        'INSERT INTO products (id, gender, publish, category, available, priceSale, taxes, quantity, sizes, inventoryType, images, tags, code, description, newLabelEnabled, newLabelContent, sku, saleLabelEnabled, saleLabelContent, name, price, coverUrl, totalRatings, totalSold, totalReviews, subDescription, colors) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [
          uuidv4(),
          gender,
          publish,
          category,
          available,
          priceSale,
          taxes,
          quantity,
          sizesString,
          inventoryType,
          imagesString,
          tagsString,
          code,
          description,
          newLabel.enabled ? 1 : 0,
          newLabel.content,
          sku,
          saleLabel.enabled ? 1 : 0,
          saleLabel.content,
          name,
          price,
          coverUrl,
          totalRatings,
          totalSold,
          totalReviews,
          subDescription,
          colorsString
        ]
      );

      if (result.affectedRows > 0) {
        results.push({ id, message: 'Product created successfully', });
      } else {
        results.push({ id, message: 'Failed to create product' });
      }
    }

    res.status(200).json({ results });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
} else {
  res.setHeader('Allow', ['POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
}