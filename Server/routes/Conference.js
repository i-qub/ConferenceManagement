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

module.exports = router;
