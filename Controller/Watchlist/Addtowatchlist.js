import watchlist from "../../Model/watchlist.js";

const addtowatchlist = async(req,res)=>{
    try{
        const productid = req.params.id;
        const userid = req.user.id;
        //find cart item already in cart

        const watchlistitem = await watchlist.findOne({user : userid, product:productid});
        if(watchlistitem){
            res.send(200).json({
                message: "Product already in Watchlist"
            })
        }
        else{
        const createwatchlist = new watchlist({
            user : userid,
            product : productid
        })

        await createwatchlist.save();

        if(createwatchlist){
            res.status(201).json({message: "Product added to Watchlist successfully!"})
        }
        else{
            res.status(400).json({message: "Failed to add product to watchlist!"})
        }

        }

    }
    catch(error){
        console.error(error);
        res.status(500).json({message: "Server Error"})
    }
}

export default addtowatchlist;