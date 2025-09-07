import mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    email:{
        type:String,
        requried:[true,'Email is required'],
        unique:true,
        lowercase:true 
    },
    password:{
        type:String,
        required:[true,'password is required']
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    }},{timestamps:true})

const UserStructure=mongoose.model('User',userSchema)
export default UserStructure