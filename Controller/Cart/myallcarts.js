import cartmodel from "../../Model/Cart.js";

const getallcart =async(req,res)=>{
    try{
        const user = req.user.id;
        const carts = await cartmodel.find({user}).populate('product');
        if(carts.length>=1){
            res.status(200).json(
                {
                    message: 'All carts fetched successfully',
                    carts
                }
            );
        }
        else{
            res.status(404).json(
                {
                    message: 'No carts found for this user'
                }
            );
        }
    }
    catch(err){
        console.error(err);
        res.status(500).json(
            {
                message: 'Server Error'
            }
        );
    }
}

export default getallcart;