// models/Product.js
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  // Thêm các trường khác tùy theo nhu cầu
});

export default mongoose.models.Product || mongoose.model('Product', productSchema);