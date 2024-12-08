import express from 'express';
import login from '../Controller/Auth/Login.js';
import register from '../Controller/Auth/register.js';
import upload from '../Middleware/multermiddelware.js';

const authroute = express.Router();


authroute.post('/login',login)
authroute.post('/register',upload.single('file'),register)


export default authroute;