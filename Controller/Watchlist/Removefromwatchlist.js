import watchlist from "../../Model/watchlist.js";

const removefromwatchlist = async (req, res) => {
    try {
        const userId = req.user.id; // Authenticated user's ID
        const productId = req.params.id; // Product ID to remove

        // Find and delete the cart entry for the user and product
        const watchlistitem = await watchlist.findOneAndDelete({
            user: userId,
            product: productId,
        });

        if (!watchlistitem) {
            return res.status(404).json({ message: "Watchlist product not found in cart" });
        }

        res.status(200).json({ message: "Product removed from watchlist" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default removefromwatchlist;
