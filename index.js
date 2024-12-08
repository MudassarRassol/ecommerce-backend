import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import conection from './db.js';
import authroute from './Routes/Authroutes.js';
import productroutes from './Routes/Productroutes.js';
import orderroutes from './Routes/orderroutes.js';
import cartroutes from './Routes/cartroutes.js';
import watchlistroutes from './Routes/Watchlistroutes.js';
const app = express();


app.use(express.json());
app.use(cookieParser());
dotenv.config();
app.use(cors(
    {
        // origin: process.env.CLIENT_URL,
        credentials: true,
    }
));


app.use('/auth',authroute);
app.use('/api',productroutes);
app.use('/api',orderroutes);
app.use('/api',cartroutes);
app.use('/api',watchlistroutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    conection();
    console.log(`Server running on port ${PORT}`);
})