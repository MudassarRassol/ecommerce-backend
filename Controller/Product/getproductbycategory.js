import productmodel from "../../Model/product.js ";

const searchproductbycategory =async(req,res)=>{

    try{
        const category = req.params.category;
        const categoryid = category.toLowerCase();


        const find = await productmodel.find({category : categoryid});
        if(find){
            res.status(200).json(find);
        }
        else{
            res.status(404).json({message:"No products found in this category."});
        }
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}

export default searchproductbycategory;