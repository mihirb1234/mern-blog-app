const userModel=require('../models/user.models')
const bcrypt=require('bcrypt')
exports.registerController=async(req,res)=>{
    try{
        const {username,email,password}=req.body;
        if(!username || !email || !password){
            return res.status(400).send({
                success:false,
                message:"all fields are requires"
            })
        }
        const existingUser=await userModel.findOne({email})

        if(existingUser){
            return res.status(401).send({
                message:"user already exists",
                success:false,
                
            })
        }

        //save the user 

        const user=new userModel({username,email,password});
        await user.save();
        return res.status(201).send({
            success:true,
            message:"new user created",
            user 
        })
    }catch(error){
        console.log(error)
        return res.status(500).send({
            message:'error in register callback',
            success:false,
            error
        })
    }
}

//get all users
exports.getAllUsers=async(req,res)=>{
    try {
        const users=await userModel.find({})
        return res.status(200).send({
            success:true,
            userCount:users.length,
            message:"all users data",
            users
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message:"error in get all users ",
            success:false,
            error
        })
    }
}
//login

exports.loginController=()=>{

}
