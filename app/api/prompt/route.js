import { connecttoDb } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async () =>{

    try{

        await connecttoDb()

        const promts = await Prompt.find({}).populate('creator')

        return new Response( JSON.stringify(promts) , { status : 200 })
    }
    catch(e){
      
        return new Response( "prompt fetching failed" , { status : 501})

    }

}