
import express from "express"
import dotenv from 'dotenv'
import cors from "cors"
import { ConnectDB } from "./config/db.js"
import authRouter from './routes/authRoutes.js'
import  productRoutes from './routes/productRoutes.js'
import  cartRoutes from './routes/cartRoutes.js'

dotenv.config()
const app=express()
app.use(cors())
app.use(express.json())

ConnectDB();
app.get('/',(req,res)=>{
    res.send("running")
})
app.use('/api/auth',authRouter);
app.use('/api/products',productRoutes);
app.use('/api/cart',cartRoutes)
const Port=process.env.PORT || 5000
app.listen(Port,()=>{
    console.log(`serer is running on localhost://${Port}`)
})