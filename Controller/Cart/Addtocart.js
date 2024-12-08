import cartmodel from "../../Model/Cart.js";

const addtocart = async(req,res)=>{
    try{
        const product = req.params.id;
        const user = req.user.id;
        //find cart item already in cart

        const cartItem = await cartmodel.findOne({user, product});
        if(cartItem){
            res.send(200).json({
                message: "Product already in cart",
                cartItem
            })
        }
        else{
        const {quantity,totalprice} = req.body;
        const cart = new cartmodel({
            user,
            product,
            quantity,
            totalprice
        })

        await cart.save();

        if(cart){
            res.status(201).json({message: "Product added to cart successfully!"})
        }
        else{
            res.status(400).json({message: "Failed to add product to cart"})
        }

        }

    }
    catch(error){
        console.error(error);
        res.status(500).json({message: "Server Error"})
    }
}

export default addtocart;