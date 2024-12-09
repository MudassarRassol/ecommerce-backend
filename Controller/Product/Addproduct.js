import productmodel from "../../Model/product.js";
import uploadImage from "../../Helper/cloudniary.js";
const addproduct = async(req,res)=>{
    try{
        const {name,description,price,quantity,totalsold,category,productstatus} = req.body;

        const path = req.file?.path;
        const imageUrl = await uploadImage(path,"Product");
        if(imageUrl){
            const addproduct = await productmodel({
                name,
                description,
                price,
                quantity,
                totalsold,
                productstatus,
                image : imageUrl,
                category,
                seller: req.user.id,

            })

            await addproduct.save();

        }

        res.status(200).json({message: "Product added successfully", product: addproduct});
    }
    catch(error){
        console.error(error);
        res.status(500).json({message: "Error adding product", error});
    }
}

export default addproduct;