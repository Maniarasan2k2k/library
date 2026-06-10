import mongoose from "mongoose";


const bookSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:[true, "Book Title is Required"]
        },
        author:{
            type:String,
            required:[true, "Author Title is Required"]
        },
        isbn:{
            type:String,
            required:[true, "ISBN Title is Required"],
            trim:true
        },
        genr:{
            type:String,
            required:[true, "Category Title is Required"],
        },
        totalCopies:{
            type:Number,
            required:[true, "TotalCopies Title is Required"],
            min:[0,"Total Copies cannot be Negative"]
        },
        publishYear:{
            type:Number,
            required:[true, "Publish Title is Required"],
        }

    }
);

export default mongoose.model("book",bookSchema)

