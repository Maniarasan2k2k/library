import Book from "../Model/Book.js"


export const creatBook = async(req,res)=>{
    try{
        
         const {title,author,isbn, genr, totalCopies, publishYear }= req.body
         const isbnExist = await Book.findOne({isbn})

         if(isbnExist){
            return res.status(401).json({message:" A book is Already Exist"})
         }

        const book = Book.create({
            title,
            author,
            isbn,
            genr,
            totalCopies,
            publishYear
        })

        res.status(201).json({message:"Books is Created"})
    }catch(err){
        // console.log(err.message)
        res.status(500).json({err})
    }
}

export const getAllBooks = async(req,res)=>{
    try{
        
        
        const books = await Book.find().sort({createdAt: -1})
        res.status(201).json({books})

    }catch(err){
        res.status(500).json({err})
    }
}

export const getOneBook = async(req,res)=>{

    try{
        const book = await Book.findById(req.params.id)
        res.status(200).json({book})

    }catch(err){
        res.status(500).json({err})
    }
}


export const UpdateOne = async(req,res)=>{

        try{
            const book = await Book.findByIdAndUpdate(req.params.id,req.body, {returnDocument:"after"})
            res.status(200).json({book})

        }catch(err){
        res.status(500).json({err})
    }
}

export const deleteOne = async(req,res)=>{
    try{

         const book =  await Book.findByIdAndDelete(req.params.id)

         res.status(200).json({book})

    }catch(err){
         res.status(500).json({err})
    }
}
