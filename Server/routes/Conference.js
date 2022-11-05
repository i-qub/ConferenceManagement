const express = require('express');
const router = express.Router();
const dateFormat = require("dateformat");
const users = require('../models/UsersModel')
const conference = require('../models/ConferencesModel')
// const deactivedated = require('../models/DeactivatedModel')

router.post("/addContractor", async(req, res) => {
    let MDate = (req.body.meetdate).trim();
    let FDate = (req.body.fromtime).trim();
    let TDate = (req.body.totime).trim();
    var getData = await conference.findOne({
        meetdate:MDate,
        fromtime:FDate,
        totime:TDate
    })
    if(getData){
        res.status(200).json('Meeting Already Fixed On This Time')
    }else{
        var data = new conference({...req.body})
        let saveData = await data.save()
        if(saveData){
            res.status(200).json('success')
        }
    }

});


router.get("/viewContractor", async(req, res) => {
    let results = await conference.find({})
    res.status(200).json(results)
});

// router.post("/deactivateCon", async(req, res) => {
//     const token = req.body.token;
//     let results = await users.find({
//         token:token
//     })
//     if (results) {
//     const date = new Date();
//     const deactivedate = dateFormat(date, "dd-mm-yyyy");         
//     var data = new deactivedated({...req.body,deactivedate:deactivedate})
//     await data.save()
//     await deactivedated.findOneAndRemove({token:results[0].token})
//          }
// });

module.exports = router;