import express from 'express';
import checktoken from '../Middleware/middelware.js';
import admincheck from '../Middleware/adminmiddelware.js';
import upload from '../Middleware/multermiddelware.js';
import addproduct from '../Controller/Product/Addproduct.js';
import getallproducts from '../Controller/Product/getproduct.js';
import delproduct from '../Controller/Product/delproduct.js';
import asaadminmyproducts from '../Controller/Product/getmyadminproduct.js';
import getallproductofseller from '../Controller/Product/getallproductofseller.js';
import updateproduct from '../Controller/Product/updateproduct.js';
import addreview from '../Controller/Product/addreview.js';
import searchproductbycategory from '../Controller/Product/getproductbycategory.js';
import searchproduct from '../Controller/Product/searchproduct.js';
const productroutes = express.Router();

productroutes.post('/addproducts',checktoken,admincheck,upload.single('file'),addproduct);
productroutes.put('/updateproduct/:id',checktoken,admincheck,upload.single('file'),updateproduct);
productroutes.put('/addreview/:id',checktoken,addreview);
productroutes.get('/getproducts',checktoken, getallproducts);
productroutes.get('/asaadminmyproducts',checktoken,admincheck,asaadminmyproducts);
productroutes.get('/getallproductofseller/:id',checktoken,getallproductofseller);
productroutes.get('/searchproductbycategory/:category',checktoken,searchproductbycategory);
productroutes.delete('/deletproduct/:id',checktoken,admincheck,delproduct);
productroutes.get('/searchproducts', checktoken, searchproduct);




export default productroutes;