const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    token: {
      type: String,
      trim: true,
    },
    name: {
      type: String,
      trim: true,
    },
    dob: {
      type: String,
      trim: true,
    },
    dobPlace: {
      type: String,
      trim: true,
    },
    age: {
      type: String,
      trim: true,
    },
    gender: {
      type: String,
      trim: true,
    },
    maritalStatus: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    paddress: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      trim: true,
    },
    state: {
      type: String,
      trim: true,
    },
    zipcode: {
      type: String,
      trim: true,
    },
    country: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    contractor: {
      type: String,
      trim: true,
    },
    mobile2: {
      type: String,
      trim: true,
    },
    joinDate: {
      type: String,
      trim: true,
    },
    mobile1: {
      type: String,
      trim: true,
    },
    endDate: {
      type: String,
      trim: true,
    },
    subDept: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
    },
    role: {
      type: String,
      trim: true,
    },
    dept: {
      type: String,
      trim: true,
    },
    location: {
      type: String,
      trim: true,
    },
    verified: {
      type: String,
      trim: true,
      uppercase: true,
    },
    type: {
      type: String,
      trim: true,
    },
    rejectcmt: {
      type: String,
      trim: true,
    },
    aadhar: {
      type: String,
      trim: true,
    },
    pan: {
      type: String,
      trim: true,
    },
    esi: {
      type: String,
      trim: true,
    },
    pf: {
      type: String,
      trim: true,
    },
    medicalCheckup: {
      type: String,
      trim: true,
    },
    id: {
      type: String,
      trim: true,
    },
    education: {
      type: String,
      trim: true,
    },
    ctc: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);
