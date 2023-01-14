const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const conferenceSchema = new Schema(
  {
    meettitle: {
      type: String,
      trim: true,
    },
    meetdate: {
      type: String,
      trim: true,
    },
    fromdate: {
      type: String,
      trim: true,
    },
    todate:{
      type:String,
      trim:true
    },
    fromtime: {
      type: String,
      trim: true,
    },
    
    totime: {
      type: String,
      trim: true,
    },
    priority: {
      type: String,
      trim: true,
    },
    confhall: {
      type: String,
      trim: true,
    },
    totalmembers: {
      type: String,
      trim: true,
    },
    meetingorganizer: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    mobile1: {
      type: String,
      trim: true,
    },
    mobile2: {
      type: String,
      trim: true,
    },
    dept: {
      type: String,
      trim: true,
    },
    token: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("conference", conferenceSchema);
