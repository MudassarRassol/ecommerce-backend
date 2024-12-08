import watchlist from "../../Model/watchlist.js";
const getproductinwatchlist =async(req,res)=>{
    try{
        const user = req.user.id;
        const watchlistdata = await watchlist.find({user}).populate('product');
        if(watchlistdata){
            res.status(200).json(
                {
                    message: 'All watchlist fetched successfully',
                    watchlistdata
                }
            );
        }
        else{
            res.status(404).json(
                {
                    message: 'No watchlist found for this user'
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

export default getproductinwatchlist;