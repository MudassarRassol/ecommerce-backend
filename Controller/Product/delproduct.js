import productmodel from "../../Model/product.js";

const delproduct = async(req,res)=>{
    try {
        const { id } = req.params;
        console.log(id);
        const product = await productmodel.findByIdAndDelete({_id : id});
        if(product){
            res.status(200).json({message: 'Product deleted successfully'});
        }
        else{
            res.status(404).json({message: 'Product not found'});
        }
    }
    catch{
        res.status(500).json({message: 'Server error'});
    }
} 

export default delproduct;