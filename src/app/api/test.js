// pages/api/test.js
import dbConnect from '../../dbConnect';
import Product from '../../models/Product';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const product = new Product({
        name: 'Test Product',
        price: 100,
        description: 'This is a test product',
      });

      await product.save();

      res.status(200).json({ success: true, data: product });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}