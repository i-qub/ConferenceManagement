require("dotenv").config();

const pool = require("../config/dbConfig");
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const utils = require("./Utils");
const UsersModel = require("../models/UsersModel");
//middleware that checks if JWT token exists and verifies it if it does exist.
//In all future routes, this helps to know if the request is authenticated or not.
router.use(function (req, res, next) {
  // check header or url parameters or post parameters for token
  var token = req.headers["authorization"];
  if (!token) return next(); //if no token, continue

  token = token.replace("Bearer ", "");
  jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
    if (err) {
      return res.status(401).json({
        error: true,
        message: "Invalid user."
      });
    } else {
      req.user = user; //set the user to req so other routes can use it
      next();
    }
  });
});

// request handlers
router.get("/", (req, res) => {
  if (!req.user)
    return res
      .status(401)
      .json({
        success: false,
        message: "Invalid user to access it."
      });
  res.send("Welcome to Menon & Menon..! - " + req.user.name);
});

// validate the user credentials
router.post("/login", async function (req, res) {
  const user = req.body.username;
  const pwd = req.body.password;
  // return 400 status if username/password is not exist
  if (!user || !pwd) {
    return res
      .status(400)
      .json({
        error: true,
        message: "Token No. or Password is Required..!"
      });
  }

  let result = await UsersModel.find({
    token: user,
    password: pwd,
    verified: "YES",
  });

  if (result) {
    userData = result;
    // generate token
    const token = utils.generateToken(userData);
    // return the token along with user details
    res.status(200).json({
      user: userData,
      token
    });
  } else {
    return res
      .status(401)
      .json({
        error: false,
        message: "Token No. or Password is Wrong..!"
      });
  }
});
router.post("/signUp", async (req, res) => {
  var getData = await UsersModel.findOne({
    ...req.body,
  });
  if (getData) {
    res.status(200).json("User already exists");
  } else {
    var data = new UsersModel({
      ...req.body,
    });
    let saveData = await data.save();
    if (saveData) {
      res.status(200).json("success");
    }
  }
});

router.get("/getUserInfoByUserId", async (req, res) => {
  try {
    var getData = await UsersModel.findOne({
      _id: req.query.userId
    });
    if (getData) {
      res.status(200).json({
        title: "success",
        status: true,
        message: "Data Successfully fetched",
        data: getData
      });
    }
  } catch (err) {
    res.status(500).json({
      title: "error",
      status: false,
      message: "Internal Server Error"
    });
  }

})

router.post("/updateUser", async (req, res) => {
  try {
    var getData = await UsersModel.findOneAndUpdate({
      _id: req.body.userId
    },{
      ...req.body
    });
    if (getData) {
      res.status(200).json({
        title: "success",
        status: true,
        message: "Data Successfully Update"
      });
    }
  } catch (err) {
    res.status(500).json({
      title: "error",
      status: false,
      message: "Internal Server Error"
    });
  }

})

module.exports = router;