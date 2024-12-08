import productmodel from "../../Model/product.js";

const getallproductofseller = async (req,res)=>{
    try {
        const {seller} = req.params;
        const products = await productmodel.find(seller);
        if (products){
            console.log("All products of seller:", products);
            res.json(products);
        }
        else{
            console.log("No products found for seller:", seller);
            res.status(404).send("No products found for this seller");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
}

export default getallproductofseller;