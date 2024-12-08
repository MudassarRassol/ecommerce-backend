import mongoose from 'mongoose';


const product = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    quantity: {
        type: Number,
        required: true,
        min: 0
    },
    totalsold:{
        type: Number,
        default: 0
    },
    category: {
        type: String,
        required: true,
        enum: ['Electronics', 'Clothing', 'Books', 'Toys', 'Home & Garden']
    },
    image: {
        type: String,
        required: true
    },
    reviews:[
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            rating: {
                type: Number,
                min: 1,
                max: 5
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    seller:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

},{timestamps : true})

const productmodel = mongoose.model('Product', product);

export default productmodel;