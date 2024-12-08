import usermodel from "../Model/User.js";

const admincheck = async(req,res,next)=>{

    const finduser = await usermodel.findById({_id : req.user.id})
    if( !finduser || finduser.role !== "admin"  ){
        return res.status(403).json({error : "Unauthorized Access"})
    }
    else{
        console.log("Admin Access Granted")
        req.admin = true;
        next();
    }
}

export default admincheck;