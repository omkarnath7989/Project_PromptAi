import Prompt from "@models/prompt";
import { connecttoDb } from "@utils/database";

export const POST = async (request) =>{

    const { userId , prompt , tag  } = await request.json()

    try{
        await connecttoDb()
        
        const newpormpt = new Prompt({ 
            creator : userId ,  prompt ,  tag 
        })

        newpormpt.save()

        return new Response(JSON.stringify(newpormpt), { status : 201 })
    }
    catch(error){
        console.log(error)

        return new Response("POST REQUEST FAILED" , {status : 500})
    }
    
}