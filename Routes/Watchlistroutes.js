import express from 'express';
import checktoken from '../Middleware/middelware.js';
import addtowatchlist from '../Controller/Watchlist/Addtowatchlist.js';
import getproductinwatchlist from '../Controller/Watchlist/getproductinwatchlist.js';
import removefromwatchlist from '../Controller/Watchlist/Removefromwatchlist.js';
const watchlistroutes = express.Router(); 

watchlistroutes.post('/addtowatchlist/:id',checktoken,addtowatchlist)
watchlistroutes.get('/allwatchlist',checktoken,getproductinwatchlist)
watchlistroutes.delete('/removefromwatchlist/:id',checktoken,removefromwatchlist)


export default watchlistroutes;