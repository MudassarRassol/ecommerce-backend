import productmodel from "../../Model/product.js";

const asaadminmyproducts = async (req,res)=>{
    try {
        const seller = req.user.id;
        const products = await productmodel.find({seller});
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
}

export default asaadminmyproducts;