const express = require("express");
const router = express.Router();
const dateFormat = require("dateformat");
const users = require("../models/UsersModel");
const conference = require("../models/ConferencesModel");
const moment = require("moment");
router.post("/addContractor", async (req, res) => {
  console.log("08",req.body)
  var getData = await conference.findOne({
    ...req.body,
  });
  if (getData) {
    res.status(200).json("Meeting Already Fixed On This Time");
  } else {
    var data = new conference({
      ...req.body,
    });
    let saveData = await data.save();
    if (saveData) {
      res.status(200).json("success");
    }
  }
});

router.get("/viewContractor", async (req, res) => {
  let results = await conference.find({});
  console.log("26",results)
  res.status(200).json(results);
});

router.get("/deleteMeeting", async (req, res) => {
  // const token = req.body.token;
  console.log("35 backend", req.query.id);
  let results = await conference.findOneAndRemove({
    _id: req.query.id,
  });
  if (results) {
    res.status(200).json({
      data: "success",
    });
  }
});

router.post("/update", async (req, res, next) => {
  var data = await conference.findOneAndUpdate(
    {
      _id: req.body.id,
    },
    {
      $set: {
        meettitle: req.body.meettitle,
        meetdate: req.body.meetdate,
        fromtime: req.body.fromtime,
        totime: req.body.totime,
        priority: req.body.priority,
        confhall: req.body.confhall,
        totalmembers: req.body.totalmembers,
        meetingorganizer: req.body.meetingorganizer,
        email: req.body.email,
        mobile1: req.body.mobile1,
        mobile2: req.body.mobile2,
        token: req.body.token,
        dept: req.body.dept,
        token: req.body.token,
      },
    }
  );

  if (data) {
    res.status(200).json("success");
  } else {
    res.status(500).json("error");
  }
});

router.get("/getDailyData", async (req, res, next) => {
  try {
    const days = moment(req.query.formDate || new Date())
      .add(7, "days")
      .format("YYYY-MM-DD");
    let data = await conference.find({
      meetdate: {
        $lte: days,
      },
    });
    res.status(200).json({
      title: "success",
      message: "Data Successfully Fetched",
      status: true,
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      title: "error",
      message: "Internal Server Error",
      status: false,
    });
  }
});

module.exports = router;
