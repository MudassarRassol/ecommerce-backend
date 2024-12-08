import mongoose from "mongoose";

const watch = mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

const watchlist = mongoose.model('Watchlist', watch);

export default watchlist;