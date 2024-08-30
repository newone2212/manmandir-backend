const { adminToken } = require('../models/AdminToken');
const jwt = require("jsonwebtoken");
require("dotenv").config();

let adminAuth = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1]; 
    const decoded = jwt.verify(token, process.env.JWT_KEY);

    const ADT = adminToken.findOne({_adminId: decoded.adminId, token, tokenType: 'login'});
        if(!ADT){
            return res.json({
                isAuth: false,
            })
        }
        req.token = token;
        req.adminId =decoded.adminId;
        next();
    }

module.exports = {adminAuth}