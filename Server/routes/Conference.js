const express = require("express");
const router = express.Router();
const dateFormat = require("dateformat");
const users = require("../models/UsersModel");
const conference = require("../models/ConferencesModel");
// const deactivedated = require('../models/DeactivatedModel')

router.post("/addContractor", async (req, res) => {
  let MDate = req.body.meetdate.trim();
  let FDate = req.body.fromtime.trim();
  let TDate = req.body.totime.trim();
  var getData = await conference.findOne({
    meetdate: MDate,
    fromtime: FDate,
    totime: TDate,
  });
  if (getData) {
    res.status(200).json("Meeting Already Fixed On This Time");
  } else {
    var data = new conference({ ...req.body });
    let saveData = await data.save();
    if (saveData) {
      res.status(200).json("success");
    }
  }
});

router.get("/viewContractor", async (req, res) => {
  let results = await conference.find({});
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
  console.log("47", req.body);
  var data = await conference.findOneAndUpdate(
    { _id: req.body.id },
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
        dept: req.body.dept,
      },
    }
  );

  if (data) {
    res.status(200).json("success");
  } else {
    res.status(500).json("error");
  }
});

module.exports = router;
