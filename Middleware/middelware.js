import jwt from 'jsonwebtoken';
const checktoken = async (req, res, next) => {
    try {
        const token = req.cookies.token; // Safely access the token from cookies
        console.log(token);
        if (!token) {
            return res.status(401).json({ message: 'No token found. Authentication required.' });
        }

        // Verify the token using the secret key
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        console.log(decoded);
        if (!decoded) {
            return res.status(401).json({ message: 'Invalid token. Please log in again.' });
        }
        else{
            console.log(decoded)
            // Attach the decoded user data to the request object
            req.user = decoded;
            next(); // Proceed to the next middleware
        }
    } catch (error) {
        console.error('Token verification failed:', error.message);
        return res.status(401).json({ message: 'Authentication failed. Please log in again.' });
    }
};

export default checktoken;
