import usermodel from "../../Model/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const login = async (req, res) => {
    try {
        const { email, password , username } = req.body;

               const lowercasedEmail = email?.toLowerCase();
               const lowercasedUsername = username?.toLowerCase();
        const user = await usermodel.findOne({
                $or: [
                    { email : lowercasedEmail },
                    { username : lowercasedUsername }
                ]
        });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user._id },
            process.env.SECRET_KEY,
            { expiresIn: '30d' } // Token valid for 30 days
        );

        // Set token in cookies
        res.cookie( 'token', token, {
            expires: new Date(Date.now() + 3600000 * 24 * 30), // 30 days expiry
        });

        // Send success response
        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        console.error('Login Error:', error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

export default login;
