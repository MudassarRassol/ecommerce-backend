import cartmodel from "../../Model/Cart.js";

const Removefromcart = async (req, res) => {
    try {
        const userId = req.user.id; // Authenticated user's ID
        const productId = req.params.id; // Product ID to remove

        // Find and delete the cart entry for the user and product
        const cartItem = await cartmodel.findOneAndDelete({
            user: userId,
            product: productId,
        });

        if (!cartItem) {
            return res.status(404).json({ message: "Product not found in cart" });
        }

        res.status(200).json({ message: "Product removed from cart" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default Removefromcart;
