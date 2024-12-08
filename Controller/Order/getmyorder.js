import ordermodel from "../../Model/Order.js";

const getmyorder = async(req,res)=>{
    try {
        const user_id = req.user._id;
        const order = await ordermodel.find({user: user_id}).populate('items.item');
        if(!order) return res.status(404).json({message: 'Order not found'});
        else{
            // order.map((item) => item.items = item.items.map(i => ({...i._doc, quantity: i.quantity })));
            return res.status(200).json(order.reverse());
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export default getmyorder;