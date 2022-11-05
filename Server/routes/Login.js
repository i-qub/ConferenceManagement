require('dotenv').config();

const pool = require('../config/dbConfig');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const utils = require('./Utils');
const UsersModel = require('../models/UsersModel')
//middleware that checks if JWT token exists and verifies it if it does exist.
//In all future routes, this helps to know if the request is authenticated or not.
router.use(function (req, res, next) {
    // check header or url parameters or post parameters for token
    var token = req.headers['authorization'];
    if (!token) return next(); //if no token, continue

    token = token.replace('Bearer ', '');
    jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
        if (err) {
            return res.status(401).json({ error: true, message: "Invalid user." });
        } else {
            req.user = user; //set the user to req so other routes can use it
            next();
        }
    });
});


// request handlers
router.get('/', (req, res) => {
    if (!req.user) return res.status(401).json({ success: false, message: 'Invalid user to access it.' });
    res.send('Welcome to Menon & Menon..! - ' + req.user.name);
});


// validate the user credentials
router.post('/login', async function (req, res) {
    const user = req.body.username;
    const pwd = req.body.password;
    // return 400 status if username/password is not exist
    if (!user || !pwd) {
        return res.status(400).json({ error: true, message: "Token No. or Password is Required..!" });
    }
    // pool.query(`SELECT token,name,role,contractor,dept FROM users WHERE token = $1 AND password = $2 AND verified = 'YES' `,[user,pwd] ,(error, result) => {
    //     if (error) {
    //          return res.status(400).json(error); }
    //     if (result.rows.length > 0) {
    //         userData = result.rows;
    //         // generate token
    //         const token = utils.generateToken(userData);
    //         // return the token along with user details
    //         res.status(200).json({ user: userData, token });
    //     }
    //     else { return res.status(401).json({ error: true, message: "Token No. or Password is Wrong..!" }); }
    // });
    let result = await UsersModel.find({
        token:user,
        password:pwd,
        verified:'YES'
    })

            if (result) {
            userData = result;
            // generate token
            const token = utils.generateToken(userData);
            // return the token along with user details
            res.status(200).json({ user: userData, token });
        }
        else { return res.status(401).json({ error: true, message: "Token No. or Password is Wrong..!" }); }
});

module.exports = router;