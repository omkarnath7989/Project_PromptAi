import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"

import User from "@models/user";
import { connecttoDb } from "@utils/database";

const handler = NextAuth({

    providers : [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],

    callbacks :{
        async session({ session }) {
            // store the user id from MongoDB to session
            const sessionUser = await User.findOne({ email: session.user.email });
            session.user.id = sessionUser._id.toString();
      
            return session;
          },

        async signIn({ user , profile , credentials , account}){

            try{

                await connecttoDb()

                const isUserexisits = await User.findOne({email : profile.email})

                if(!isUserexisits){
                    await User.create({
                        email: profile.email,
                        username: profile.name.replace(/\s/g, "").toLowerCase(),
                        image: profile.picture
                      })
                }

                return true 
            }
            catch(error){
                console.log(error.message)
                return false ; 
            }

        }
    }
})


export {handler as GET , handler as POST }