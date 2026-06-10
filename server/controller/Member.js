import Member from "../Model/Member.js"

export const creatMember = async(req,res)=>{
    try{
        
         const {fName, email, ph, department, member }= req.body
         

        const memberone =  Member.create({
            fName,
            email,
            ph,
            department,
            member
        })

        res.status(201).json({message:"Member Created"})
    }catch(err){
        // console.log(err.message)
        res.status(500).json({err})
    }
}


export const getAllMembers = async(req,res)=>{
    try{
        
        
        const member = await Member.find().sort({createdAt: -1})
        res.status(201).json({member})

    }catch(err){
        res.status(500).json({err})
    }
}

export const getOneMember = async(req,res)=>{

    try{
        const member = await Member.findById(req.params.id)
        res.status(200).json({member})

    }catch(err){
        res.status(500).json({err})
    }
}

export const UpdateOne = async(req,res)=>{

        try{
            const member = await Member.findByIdAndUpdate(req.params.id,req.body, {returnDocument:"after"})
            res.status(200).json({member})

        }catch(err){
        res.status(500).json({err})
    }
}

export const deleteOne = async(req,res)=>{
    try{

         const member =  await Member.findByIdAndDelete(req.params.id)

         res.status(200).json({member})

    }catch(err){
         res.status(500).json({err})
    }
}