import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import mysql from 'mysql2/promise';

const handler = NextAuth({
  secret: process.env.SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Phải ghi rõ dữ liệu cho biến username và password vì credentials trả về nhiều key khác
        const username = credentials?.email;
        const password = credentials?.password;
        
        // console.log({username, password});
        if (!username || !password) {
          throw new Error('Missing username or password');
        }
      
        const connection = await mysql.createConnection({
          host: process.env.MYSQL_HOST,
          user: process.env.MYSQL_USER,
          password: process.env.MYSQL_PASSWORD,
          database: process.env.MYSQL_DATABASE
        });
        // phải chú ý email và password phải đúng với tên cột trong database
        const [rows] = await connection.execute('SELECT * FROM users WHERE email = ? AND password = ?', [username, password]);
      
        await connection.end();
      
        if (rows.length > 0) {
          console.log({rows});
          return { id: rows[0].id, name: rows[0].name, email: rows[0].email }
        } else {
          return null;
        }
      }
    })
  ],
  callbacks: {
    jwt({ token, user, trigger, session }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }
  
      if (trigger === "update" && session?.name) {
        token.name = session.name;
      }
  
      return token;
    }
  }
})

export { handler as GET, handler as POST }