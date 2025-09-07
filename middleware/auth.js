import e from 'express';
import jwt from 'jsonwebtoken'

export const authMiddlewaree=(req,res,next)=>{
  const authHeader=req.headers['authorization']

   if(!authHeader || !authHeader.startsWith('Bearer '))
   {
    return res.status(401).json({message:"no token provided"});
   }
   const token=authHeader.split(' ')[1];
   try{
     const decoded=jwt.verify(token,process.env.JWT_SECRET)
     req.user=decoded;
     next();
   }
   catch(error)
   {
    res.statu(500).json({message:"invalid token or expired token"})
   }
}

export const adminMiddleware=(req,res,next)=>{
    console.log(req.user.role)
    if(req.user.role!="admin")
    {
        return res.status(403).json({message:"access denide:Admin Ony"})
    }
    next();
}