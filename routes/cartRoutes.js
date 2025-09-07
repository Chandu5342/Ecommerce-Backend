import { Router } from "express";
import {getCart,addToCart,removeFromCart} from '../controllers/cartController.js'
import { authMiddlewaree } from "../middleware/auth.js";

const router = Router();

router.get('/', authMiddlewaree, getCart);
router.post('/add', authMiddlewaree, addToCart);
router.delete('/remove/:productId', authMiddlewaree, removeFromCart);

export default router