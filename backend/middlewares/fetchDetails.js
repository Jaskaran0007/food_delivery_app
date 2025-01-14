import jwt from "jsonwebtoken"; // Importing the jsonwebtoken package

const jwtSecret = "HaHa"; // Define your JWT secret

const fetch = (req, res, next) => {
    // Get the user from the JWT token and add id to the req object
    const token = req.header('auth-token');
    
    if (!token) {
        return res.status(401).send({ error: "Invalid Auth Token" }); // Return early if no token
    }

    try {
        const data = jwt.verify(token, jwtSecret); // Verify the token
        req.user = data.user; // Attach the user data to the request object
        next(); // Call the next middleware
    } catch (error) {
        res.status(401).send({ error: "Invalid Auth Token" }); // Handle verification errors
    }
};

export default fetch; // Use export default for ES6 modules