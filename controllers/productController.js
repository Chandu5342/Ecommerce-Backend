import Product from '../models/Product.js'
export const createProduct=async (req,res)=>{
    try{ 
           const { name, description, price, category, image } = req.body;
           const product=await Product.create({
            name,description,price,category,image,createdBy:req.user.id
           });
           res.status(201).json(product)

    }
    catch(error)
    {
        res.status(500).json({message:"error crated product",error:error.message})
    }
}


export const getProducts = async (req, res) => {
  try {
    console.log(req.query);
    const { category, minPrice = 1, maxPrice } = req.query; 

    console.log(category, minPrice, maxPrice);

    let filter = {};
    if (category) filter.category = category;

    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    const product = await Product.find(filter);
    res.json(product);
  } catch (error) {
    res.status(500).json({
      message: "error fetching Products",
      error: error.message,
    });
  }
};


export const updateProduct=async(req,res)=>{
    try{
          const {id}=req.params;
         const updated=await Product.findByIdAndUpdate(id,req.body,{new:true})
         if(!updated){return res.status(400).json({message:"Product Not Found"})}
         res.json(updated)
    }
    catch(error)
    {
        console.log(error.message)
        res.status(500).json({error:error.message})
    }
}

export const deleteProduct=async(req,res)=>{
    try{
            const {id}=req.params;
            const deleted=await Product.findByIdAndDelete(id);
            if(!deleted){res.status(400).json({message:"Product is  not there"})}
            res.json({message:"Proudct Deteled SuccesFully"});
    }
    catch(error)
    {
        res.status(500).send({error:error.message})
    }
}