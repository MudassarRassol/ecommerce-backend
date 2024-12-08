import productmodel from "../../Model/product.js";

const getallproducts = async (req, res) => {
    try {
        // Fetch all products and populate the seller field
        const products = await productmodel.find({}).populate('seller', 'name email'); // Add fields to include only selected fields

        if (!products || products.length === 0) {
            return res.status(404).json({ message: "Products not found" });
        }

        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

export default getallproducts;
