const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = async (req, res, next) => {
    const token = req.headers['x-access-token'];
    // eslint-disable-next-line no-undef
    const accessSecret = process.env.ACCESS_SECRET;

    if(!token) {
        return res
            .status(401)
            .send({ auth: false, msg: 'No token was provided' });
    }

    const decoded = await jwt.verify({ token, accessSecret });

    req.userId = decoded.id;

    next();
}

module.exports = verifyToken;