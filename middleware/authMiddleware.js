const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.status(401).send('Access Denied');

    try {
        console.log('TOKEN_SECRET:', process.env.TOKEN_SECRET);
        console.log('token:', token);
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        console.log('verified:', verified);
        req.user = verified;
        next();
    } catch (err) {
        console.error('JWT Verification Error:', err);
        res.status(400).send('Invalid Token');
    }
};

module.exports = {
    authenticateToken
};
