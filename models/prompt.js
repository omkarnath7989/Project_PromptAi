import { Schema , model , models } from "mongoose";

const promptschema = new Schema({

    creator:{
        type : Schema.Types.ObjectId,
        ref : "User" 
    },
    prompt:{
        type : String,
        required : [true , "prompt is required"]
    },
    tag:{
        type : String , 
        required : [true , "tag is required"]
    }
})


const Prompt = models.prompt || model('prompt' , promptschema )

export default Prompt 