import ordermodel from "../../Model/Order.js";
const getmyorderaseller = async (req, res) => {
    try {
        const seller_id = req.user.id; // Assuming seller's ID is available in the request object
        const orders = await ordermodel.find()
            .populate({
                path: 'items.item',
                match: { seller: seller_id }, // Only match items sold by this seller
            })
            .exec();

            const filteredOrders = orders.filter(order => 
                order.items.some(i => i.item && i.item.seller === seller_id )
            );
        if (filteredOrders.length === 0) {
            return res.status(404).json({ message: 'No orders found for this seller' });
        }

        return res.status(200).json(filteredOrders.reverse()); // Returning the latest orders first
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default getmyorderaseller;
