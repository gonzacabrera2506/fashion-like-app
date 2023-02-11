require('dotenv').config();
const jwt = require('jsonwebtoken');
const getTokenFrom = require('./get-token-from');

module.exports = {
    generateAccessToken: (user) => {
        if(!user.roleId || !user.id || !user.email) return null; // access denied, it returns null

        const userForToken = {
            email: user.email,
            role: user.roleId,
            id: user.id
        }

        const token = jwt.sign(userForToken, process.env.ACCESS_SECRET, { expiresIn: 60 * 60 * 24 });

        return token; // it returns token
    },
};