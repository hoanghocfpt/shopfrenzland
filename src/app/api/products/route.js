// pages/api/products.js
import dbConnect from '../../../utils/dbConnect'; // Điều chỉnh đường dẫn tới thư mục utils
import Product from '../../../models/Product'; 

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const products = await Product.find({});
      res.status(200).json({ success: true, data: products });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}