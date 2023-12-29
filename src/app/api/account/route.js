import mongoose from "mongoose";
import { getServerSession } from "next-auth";
// import {  } from "@/app/api/auth/[...nextauth]/route";
import { User } from "@/models/User";
export async function PUT (req) {
    mongoose.connect(process.env.MONGO_URL)
    
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
    
                  mongoose.connect(process.env.MONGO_URL);
                  const user = await User.findOne({email});
    
                  if(user && user.password === password) {
                    return user;
                  }
                  
                  return null
                }
            })
        ],
    });
    const email = session.user.email;
    if('name' in data){
        await User.updateOne({email}, {name:data.name})
        
    }
    console.log({session, data});

    return Response.json(true)

}