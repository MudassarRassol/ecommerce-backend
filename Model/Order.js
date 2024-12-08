import mongoose from 'mongoose';

const order = mongoose.Schema({
    customerid: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    items: [
        {
            item: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
            quantity: Number,
            price: Number
        }
    ],
    total: {
        type: Number,
        required: true,
        default: 0,
    },
    status: { 
        type: String, 
        enum : ['pending','canncel' ,'on way','delivered'],
        default: 'Pending' 
    },
    address :{
        street: String,
        city: String,
        state: String,
        zipCode: String
    }
},{timestamps : true})

const ordermodel = mongoose.model('Order', order);

export default ordermodel;
