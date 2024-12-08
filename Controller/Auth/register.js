import usermodel from "../../Model/User.js";
import uploadImage from "../../Helper/cloudniary.js";
import bcrypt from 'bcryptjs';
const register =async(req,res)=>{
    try{
        const {username,email,password} = req.body;
        const user = await usermodel.findOne({email});
        if(user){
            console.log(user.email);
            return res.status(400).json({error: "User already exists"});
        }
        else{
            const path = req.file?.path;
            const imageUrl = await uploadImage(path,"Product");
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new usermodel({username,email,password : hashedPassword , Profilephoto : imageUrl});
            await newUser.save();
            res.status(201).json({message: "User registered successfully"});
        }
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
}

export default register;