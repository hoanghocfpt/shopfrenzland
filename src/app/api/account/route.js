import { createConnection } from 'mysql2/promise';
import { getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export async function PUT(req) {
    const data = await req.json();
    const session = await getServerSession({
        secret: process.env.SECRET,
        providers: [
            CredentialsProvider({
                name: 'Credentials',
                id: 'credentials',
                credentials: {
                  username: { label: "Email", type: "email", placeholder: "test@example.com" },
                  password: { label: "Password", type: "password" }
                },
                async authorize(credentials, req) {
                  console.log({credentials});
                  const email = credentials?.email;
                  const password = credentials?.password;

                  const connection = await createConnection({
                    host: process.env.MYSQL_HOST,
                    user: process.env.MYSQL_USER,
                    password: process.env.MYSQL_PASSWORD,
                    database: process.env.MYSQL_DATABASE
                  });

                  const [rows] = await connection.execute('SELECT * FROM users WHERE email = ? AND password = ?', [email, password]);
                  await connection.end();

                  if(rows.length > 0) {
                    return rows[0];
                  }
                  
                  return null;
                }
            })
        ],
    });

    const email = session.user.email;
    if('name' in data){
        const connection = await createConnection({
          host: process.env.MYSQL_HOST,
          user: process.env.MYSQL_USER,
          password: process.env.MYSQL_PASSWORD,
          database: process.env.MYSQL_DATABASE
        });

        await connection.execute('UPDATE users SET name = ? WHERE email = ?', [data.name, email]);
        await connection.end();
    }

    console.log({session, data});

    return Response.json(true);
}