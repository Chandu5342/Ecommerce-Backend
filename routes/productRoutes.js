import {Router} from "express"
import { adminMiddleware, authMiddlewaree } from "../middleware/auth.js"
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/productController.js"
const route=Router()


route.get('/',getProducts)
route.post('/addProduct',authMiddlewaree,adminMiddleware,createProduct)
route.put('/update/:id',authMiddlewaree,adminMiddleware,updateProduct);
route.delete('/delete/:id',authMiddlewaree,adminMiddleware,deleteProduct);

export default route 