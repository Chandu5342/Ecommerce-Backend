import Cart from '../models/Cart.js'

export const getCart=async (req,res)=>{
    try{
        console.log(req.user)
       const cart=await Cart.findOne({userid:req.user.id}).populate('items.productId');
       console.log(cart)
       if(!cart) return res.json({items:[]});
       console.log(cart);
       res.json(cart)
    } 
    catch(error)
    {
        res.status(500).json({error:error.message})
    }
}

export const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    console.log(productId, quantity, req.user.id);

    let cart = await Cart.findOne({ userid: req.user.id });

    if (!cart) {
      cart = new Cart({ userid: req.user.id, items: [] }); 
    }

    const itemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += Number(quantity) || 1;
    } else {
      cart.items.push({ productId, quantity: Number(quantity) || 1 });
    }

    await cart.save();
    res.status(201).json(cart);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};



export const removeFromCart = async (req, res) => {
  try {
    const { productId } = req.params;
    console.log(productId)
    let cart = await Cart.findOne({ userid: req.user.id });
    console.log(cart)
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    cart.items = cart.items.filter(item => item.productId.toString() !== productId);

    await cart.save();
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: 'Error removing from cart', error: err.message });
  }
};