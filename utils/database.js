import mongoose from "mongoose";

let isconnected = false 

export const connecttoDb = async ()=>{

    mongoose.set('strictQuery' , true )

    if(isconnected){
        console.log("MongoDb is connected")
        return 
    }

    try{
      await  mongoose.connect(process.env.MONGODBURI , {
            dbName : "share_promt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isconnected = true ; 
    }
    catch(error){
        console.log(error.message)
    }
}