import productmodel from "../../Model/product.js";

const addreview =async(req,res)=>{
    try{
        const {id} = req.params;
        const {rating,comment} = req.body;
        const product = await productmodel.findByIdAndUpdate(id,
            {$push:{reviews:{rating,comment}}},
            {new:true});

        if(product){
            res.status(200).json(product);
            console.log('review added successfully');
        }
        else{
            res.status(404).json({message:'Product not found'});
            console.log('Product not found');
        }
    }
    catch(error){
        console.error(error);
        res.status(500).json({message:'Internal Server Error'});
    }
}

export default addreview;