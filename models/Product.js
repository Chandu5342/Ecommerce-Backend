import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Product name is required"]
    },
    description:{
        type:String,
    },
    price:{
        type:Number,
        required:[true,"Price is required"]
    },
    category:{
     type:String,
     required:[true,"Category  is required"]
    },
    image:{
        type:String
   },
   createdBy: {   // NEW FIELD
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
} ,{timestamps:true});

const ProductModel=mongoose.model('Product',ProductSchema)
export default ProductModel