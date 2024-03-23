import { NextApiRequest, NextApiResponse } from 'next';
import { RowDataPacket } from 'mysql2';
import db from '../../../utils/db';
import { Product } from '../../../types/product';
import cors from '../../../utils/cors'; // Asegúrate de que la ruta sea correcta

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Aplicar la configuración de CORS
    await cors(req, res);

    try {
        const { productId } = req.query;

        const [rows] = await db.query<RowDataPacket[]>('SELECT * FROM products WHERE id = ?', [productId]);
        const product: Product | undefined = rows.map((row) => {
            return {
                id: row.id,
                gender: row.gender,
                publish: row.publish,
                category: row.category,
                available: row.available,
                priceSale: row.priceSale,
                taxes: row.taxes,
                quantity: row.quantity,
                sizes: row.sizes.split(','),
                inventoryType: row.inventoryType,
                images: row.images.split(','),
                tags: row.tags.split(','),
                code: row.code,
                description: row.description,
                newLabel: {
                    enabled: Boolean(row.newLabelEnabled),
                    content: row.newLabelContent
                },
                sku: row.sku,
                saleLabel: {
                    enabled: Boolean(row.saleLabelEnabled),
                    content: row.saleLabelContent
                },
                name: row.name,
                price: row.price,
                coverUrl: row.coverUrl,
                totalRatings: row.totalRatings,
                totalSold: row.totalSold,
                totalReviews: row.totalReviews,
                subDescription: row.subDescription,
                colors: row.colors.split(','),
                createdAt: new Date(row.created_at),
                updatedAt: new Date(row.updated_at),
            };
        })[0]; // Suponiendo que el ID es único, debería haber solo un producto en el resultado

        if (!product) {
            res.status(404).json({ message: 'Product Not Found!' });
            return;
        }

        res.status(200).json({ product });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

/***CODIGO ANTIGUO****/

// import { NextApiRequest, NextApiResponse } from 'next';
// // utils
// import cors from 'src/utils/cors';
// // _mock
// import { _products } from 'src/_mock/_product';

// // ----------------------------------------------------------------------

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     await cors(req, res);

//     const { productId } = req.query;

//     const product = _products.find((product) => product.id === productId);

//     if (!product) {
//       res.status(404).json({
//         message: 'Product Not Found!',
//       });
//       return;
//     }

//     res.status(200).json({
//       product,
//     });
//   } catch (error) {
//     console.error('[Product API]: ', error);
//     res.status(500).json({
//       message: 'Internal server error',
//     });
//   }
// }