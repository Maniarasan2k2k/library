import mongoose, { Mongoose } from "mongoose";

const connetedDB= async()=>{
    try{
       const conn= mongoose.connect(process.env.MONGO_URI)
       console.log("MONGODB Connected SuccessFully")
    }catch(err){
        console.log("err", err.message)
    }
}

export default connetedDB