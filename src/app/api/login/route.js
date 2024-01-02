// pages/api/login.js
import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // Tạo kết nối đến MySQL
    const connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE
    });

    // Kiểm tra thông tin người dùng
    const [rows] = await connection.execute('SELECT * FROM users WHERE username = ? AND password = ?', [username, password]);
    
    if (rows.length > 0) {
      // Người dùng hợp lệ, trả về thông tin người dùng
      res.status(200).json({ user: rows[0] });
    } else {
      // Người dùng không hợp lệ, trả về lỗi
      res.status(401).json({ message: 'Unauthorized' });
    }

    // Đóng kết nối
    await connection.end();
  } else {
    // Phương thức không được hỗ trợ
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}