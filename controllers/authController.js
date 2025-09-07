import User from  '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const generatetoken=(user)=>{
    return jwt.sign({id:user._id,role:user.role},
        process.env.JWT_SECRET,
        {expiresIn:'7d'}
    )
   
}
export const register=async (req,res)=>{
    try{
       const {name,email,password,role}=req.body;
       const existingUser=await User.findOne({email})
       if(existingUser) return  res.status(400).json({message:"user is already existed"})
       const hashpsw=await bcrypt.hash(password,10)
      const newUser=await User.create({
        name,
        email,
        password:hashpsw,
        role
      });
      const token=generatetoken(newUser);
      res.status(201).json({token,user:{id:newUser._id,name:newUser.name,role:newUser.role,}})
    } 
    catch(err)
    {
        console.log("error",err.message);
        res.status(500).json({error:err.message});
    }
}


export const Login=async (req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await User.findOne({email})
        if(!user){return res.status(400).json({message:"user is not there with their emailid"})}
        const ismatch=await bcrypt.compare(password,user.password);
        if(!ismatch){return res.status(400).json({message:"passowrd is in correct"})};
        const token=generatetoken(user);
        res.status(201).json({token,user:{id:user._id,name:user.name,role:user.role}})
    }
    catch(err)
    {
       res.status(500).json({error:err.message});
    }
}