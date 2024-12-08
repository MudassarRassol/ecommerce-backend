import ordermodel from "../../Model/Order.js";

const createOrder = async (req, res) => {
    try {
        const { items, total, address,status } = req.body;

        const totalprice = 0;

        // Calculate total price based on items

        for (let item of items) {
            totalprice += item.price * item.quantity;
        }

        // console.log(req.user.id)
        const newOrder = new ordermodel({
            customerid : req.user.id,
            items,
            total : totalprice ,
            address,
            status
        });


        const savedOrder = await newOrder.save();
        // console.log("Order saved:", savedOrder);

        res.status(201).json({
            message: "Order created successfully",
            order: savedOrder,
        });
    } catch (error) {
        console.error("Error creating order:", error);
        res.status(500).json({
            message: "Error creating order",
            error: error.message,
        });
    }
};

export default createOrder;
