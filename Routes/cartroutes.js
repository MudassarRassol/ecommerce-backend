import express from 'express';
import checktoken from '../Middleware/middelware.js';
import addtocart from '../Controller/Cart/Addtocart.js';
import getallcart from '../Controller/Cart/myallcarts.js';
import Removefromcart from '../Controller/Cart/Removefromcart.js';
const cartroutes = express.Router(); 

cartroutes.post('/cart/addtocart/:id',checktoken,addtocart)
cartroutes.get('/cart/allcartdata',checktoken,getallcart)
cartroutes.delete('/cart/removefromcart/:id',checktoken,Removefromcart)


export default cartroutes;