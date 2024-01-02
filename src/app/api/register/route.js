import mysql from 'mysql2/promise';

export async function POST(req) {
    const body = await req.json();

    // Tạo kết nối đến MySQL
    const connection = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    });

    // Thực thi truy vấn SQL để tạo người dùng mới
    const [result] = await connection.execute(
        'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
        [body.name, body.email, body.password]
    );

    // Lấy thông tin người dùng vừa tạo
    const [createdUser] = await connection.execute(
        'SELECT * FROM users WHERE id = ?',
        [result.insertId]
    );

    // Đóng kết nối
    await connection.end();

    return Response.json({ success: true, data: createdUser });
}