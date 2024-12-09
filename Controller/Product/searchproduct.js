import productmodel from "../../Model/product.js";

const searchproduct = async (req, res) => {
    try {
        const  {name}  = req.query;

        if (!name) {
            return res.status(400).json({ success: false, message: "Name query parameter is required." });
        }

        // Search for products by name, title, or description (case-insensitive)
        const products = await productmodel.find({
            $or: [
                { name: { $regex: name, $options: "i" } },
                { description: { $regex: name, $options: "i" } }
            ],
        });

        if(products.length >= 1){
            res.json({ success: true, products });
        }
        else{
            res.json({msg : "No products"})
        }

  
    } catch (error) {
        res.status(500).json({ success: false, message: "An error occurred", error: error.message });
    }
};

export default searchproduct;
