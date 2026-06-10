import mongoose from "mongoose";


const memberSchema = new mongoose.Schema(
    {
        fName:{
            type:String,
            required:[true, "Member Title is Required"]
        },
        email:{
            type:String,
            unique:true,
            required:[true, "email Title is Required"]
        },
        ph:{
            type:Number,
            required:[true, "PH Title is Required"],
            trim:true
        },
        department:{
            type:String,
            required:[true, "Department Title is Required"],
        },
        member:{
            type:String,
            required:[true, "Member Title is Required"],
        }

    }
);

export default mongoose.model("member",memberSchema)

