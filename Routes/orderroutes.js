import express from 'express';
import createOrder from '../Controller/Order/createorder.js';
import getmyorder from '../Controller/Order/getmyorder.js';
import checktoken from '../Middleware/middelware.js';
import admincheck from '../Middleware/adminmiddelware.js';
import getmyorderaseller from '../Controller/Order/getmyorderaseller.js';
const  orderroutes =  express.Router();

orderroutes.post('/placeorder',checktoken,createOrder);
orderroutes.get('/getmyorder',checktoken,getmyorder);
orderroutes.get('/getmyorderaseller',checktoken,admincheck,getmyorderaseller);


export default orderroutes;