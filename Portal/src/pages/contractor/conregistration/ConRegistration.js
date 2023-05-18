import React, { useState, useEffect } from "react";
import Axios from "axios";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";

// import FormGroup from "@material-ui/core/FormGroup";
// import Checkbox from "@material-ui/core/Checkbox";
import FormLabel from "@material-ui/core/FormLabel";
import { Button } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import * as moment from "moment";
import axios from "axios";
// import { setUserSession } from "../../../components/Utils/Common";
const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "100%",
  },
}));

export default function ConRegistration(props) {
  var num = 0;
  var currentDate = moment();
  const { onSubmitClose } = props;
  const classes = useStyles();
  // const [status, setStatus] = useState(undefined);
  // const [multipleMeet,setMultipleMeet] =useState(false);
  const [meettitle, setName] = useState("");
  const [meetdate, setDOB] = useState("");
  const [fromdate, setFromDate] = useState(currentDate.format("YYYY-MM-DD"));
  const [todate, setToDate] = useState("");
  const [fromtime, setFTime] = useState("");
  const [totime, setTTime] = useState("");
  // const [priority, setPriority] = useState("");
  const [confhall, setConfHall] = useState("");
  const [totalmembers, setTotalMembers] = useState("");
  const [meetingorganizer, setMeetingOrganizer] = useState("");
  const [email, setEmail] = useState("");
  const [mobile1, setMobile1] = useState("");
  const [mobile2, setMobile2] = useState("");
  const [dept, setDepartment] = useState("");

  const [apiData, setApiData] = useState([]);
  const [submitState, setSubmitState] = useState(false);

  const newContractor = (event) => {
    event.preventDefault();
    var date = fromdate;
    let count = 0;
    while (moment(date, "YYYY-MM-DD").isSameOrBefore(todate)) {
      Axios.post("http://192.168.1.52:3000/con/addContractor", {
        meettitle: meettitle,
        meetdate: date,
        fromtime: fromtime,
        totime: totime,
        confhall: confhall,
        totalmembers: totalmembers,
        meetingorganizer: meetingorganizer,
        email: email,
        mobile1: mobile1,
        mobile2: mobile2,
        dept: dept,
        token: JSON.parse(sessionStorage.user)[0].token,
      });
      date = moment(date, "YYYY-MM-DD")
        .clone()
        .add(1, "days")
        .format("YYYY-MM-DD");
      // count = count + 1;
      // alert(count);
    }

    onSubmitClose();
    window.location.reload();
    // }
  };
  useEffect(() => {
    axios.get("http://192.168.1.52:3000/con/getDailyData").then((response) => {
      setApiData(response.data.data);
      console.log(response.data.data);
    });
  }, []);
  let time = [];
  apiData.map((data) => {
    time.push([data.meetdate, data.fromtime, data.totime, data.confhall]);
  });
  // console.log(time);
  function timevalidation(time) {
    console.log(time);
    if (moment(time[0], "hh:mm").isSameOrAfter(moment(time[1], "hh:mm"))) {
      // if (moment(time[0],"hh:mm").isSameOrBefore(moment(time[1]),"hh:mm"))
      alert("Cheak The Time");
      setTTime("");
    }
  }
  function FromDatevalidation(fromdate) {
    var today = currentDate.format("YYYY-MM-DD");
    var date = moment(fromdate);
    var now = moment(today);
    console.log(now, "111");

    if (date < now) {
      alert("Meet Date can not be Previous Day");
      setFromDate(currentDate.format("YYYY-MM-DD"));
    }

    // const today = moment();
    // console.log(today.format("YYYY-MM-DD"));
    // console.log(fromdate, 101);
    // if (moment(fromdate) < todate) {
    //   alert("Meet Date can not be Previous Day");
    //   setFromDate("");
    // }
  }
  function ToDatevalidation(date) {
    console.log(date, "104");
    if (moment(date[0], "YYYY-MM-DD").isAfter(moment(date[1], "YYYY-MM-DD"))) {
      // if (moment(time[0],"hh:mm").isSameOrBefore(moment(time[1]),"hh:mm"))
      alert("Cheak The Date");
      setToDate("");
    }
  }

  function checkAvailability(userTime) {
    console.log(userTime);

    time.map((i) => {
      if (i[0] === userTime[0]) {
        if (i[3] === userTime[3]) {
          if (
            (moment(i[1], "hh:mm").isSameOrBefore(
              moment(userTime[1], "hh:mm"),
            ) && moment(i[2], "hh:mm").isAfter(moment(userTime[1], "hh:mm"))) |
            (moment(i[1], "hh:mm").isSameOrAfter(
              moment(userTime[1], "hh:mm"),
            ) && moment(i[1], "hh:mm").isBefore(moment(userTime[2], "hh:mm")))
          ) {
            // (moment(i[1], "hh:mm").isSame(moment(userTime[1], "hh:mm")) &&
            //   moment(i[1], "hh:mm").isBefore(moment(userTime[2], "hh:mm"))) |
            // (moment(i[1], "hh:mm").isAfter(moment(userTime[1], "hh:mm")) &&
            //   moment(i[1], "hh:mm").isSame(moment(userTime[2], "hh:mm"))) |
            // (moment(i[1], "hh:mm").isSame(moment(userTime[1], "hh:mm")) &&
            //   moment(i[2], "hh:mm").isAfter(moment(userTime[1], "hh:mm"))) |
            // (moment(i[1], "hh:mm").isBefore(moment(userTime[1], "hh:mm")) &&
            //   moment(i[2], "hh:mm").isSame(moment(userTime[1], "hh:mm")))
            // )
            alert("Time not available in selected hall");
            // setSubmitState(true);
            num = 1;
            setConfHall("");
            setFTime("");
            setTTime("");
          }
        }
      }
    });
  }
  // console.log(submitState);
  console.log(fromdate);
  console.log(todate);
  return (
    <>
      <form onSubmit={newContractor}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              label="Meeting Title"
              fullWidth
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </Grid>
          {/* <Grid item xs={12} sm={12}>
          <FormGroup>
          <FormLabel>Click For Multiple Days</FormLabel>
            <FormControlLabel control={<Checkbox  onChange={(event) => {
                setMultipleMeet(!multipleMeet);
              }}/>} lable="lable" /> 
          </FormGroup>
          </Grid> */}
          {/* <Grid item xs={12} sm={4}>
            <TextField
              type="date"
              label="Metting date"
              disabled={multipleMeet}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(event) => {
                setDOB(event.target.value);
              }}
            />
           </Grid> */}
          <Grid item xs={12} sm={4}>
            <TextField
              required
              type="date"
              label="From date"
              // disabled={!multipleMeet}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(event) => {
                setFromDate(event.target.value);
                FromDatevalidation(event.target.value);
              }}
              value={fromdate}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              required
              type="date"
              label="To date"
              value={todate}
              // onload="getDate()"
              // disabled={!multipleMeet}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(event) => {
                setToDate(event.target.value);
                ToDatevalidation([fromdate, event.target.value]);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            {/* <FormLabel required>From Time</FormLabel>
            <TextField
            required
              type="time"
              // label="From Time"
              value={fromtime}
              fullWidth
              onChange={(event) => {
                setFTime(event.target.value);
              }}
            /> */}
            <FormControl required className={classes.formControl}>
              <InputLabel
                htmlFor="age-native-required"
                required
                className={classes.formControl}
              >
                From Time
              </InputLabel>
              <Select
                native
                value={fromtime}
                onChange={(event) => {
                  setFTime(event.target.value);
                  setConfHall("");
                  setTTime("");
                }}
                style={{ width: "70%" }}
              >
                <option aria-label="None" value=" " />
                <option value="09:00">09:00 am</option>
                <option value="09:15">09:15 am</option>
                <option value="09:30">09:30 am</option>
                <option value="09:45">09:45 am</option>
                <option value="10:00">10:00 am</option>
                <option value="10:15">10:15 am</option>
                <option value="10:30">10:30 am</option>
                <option value="10:45">10:45 am</option>
                <option value="11:00">11:00 am</option>
                <option value="11:15">11:15 am</option>
                <option value="11:30">11:30 am</option>
                <option value="11:45">11:45 am</option>
                <option value="12:00">12:00 pm</option>
                <option value="12:15">12:15 pm</option>
                <option value="12:30">12:30 pm</option>
                <option value="12:45">12:45 pm</option>
                <option value="13:00">01:00 pm</option>
                <option value="13:15">01:15 pm</option>
                <option value="13:30">01:30 pm</option>
                <option value="13:45">01:45 pm</option>
                <option value="14:00">02:00 pm</option>
                <option value="14:15">02:15 pm</option>
                <option value="14:30">02:30 pm</option>
                <option value="14:45">02:45 pm</option>
                <option value="15:00">03:00 pm</option>
                <option value="15:15">03:15 pm</option>
                <option value="15:30">03:30 pm</option>
                <option value="15:45">03:45 pm</option>
                <option value="16:00">04:00 pm</option>
                <option value="16:15">04:15 pm</option>
                <option value="16:30">04:30 pm</option>
                <option value="16:45">04:45 pm</option>
                <option value="17:00">05:00 pm</option>
                <option value="17:15">05:15 pm</option>
                <option value="17:30">05:30 pm</option>
                <option value="17:45">05:45 pm</option>
                <option value="18:00">06:00 pm</option>
                <option value="18:15">06:15 pm</option>
                <option value="18:30">06:30 pm</option>
                <option value="18:45">06:45 pm</option>
                <option value="19:00">07:00 pm</option>
                <option value="19:15">07:15 pm</option>
                <option value="19:30">07:30 pm</option>
                <option value="19:45">07:45 pm</option>
                <option value="20:00">08:00 pm</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            {/* <FormLabel required>To Time</FormLabel>
            <TextField
            required
              type="time"
              // label="To Time"
              value={totime}
              fullWidth
              onChange={(event) => {
                setTTime(event.target.value);
                timevalidation([fromtime, event.target.value]);
              }}
            /> */}
            <FormControl required className={classes.formControl}>
              <InputLabel
                htmlFor="age-native-required"
                // required
                className={classes.formControl}
              >
                To Time
              </InputLabel>
              <Select
                native
                value={totime}
                onChange={(event) => {
                  setTTime(event.target.value);
                  setConfHall("");
                  timevalidation([fromtime, event.target.value]);
                }}
                style={{ width: "70%" }}
              >
                <option aria-label="None" value="" />
                <option value="09:00">09:00 am</option>
                <option value="09:15">09:15 am</option>
                <option value="09:30">09:30 am</option>
                <option value="9:45">09:45 am</option>
                <option value="10:00">10:00 am</option>
                <option value="10:15">10:15 am</option>
                <option value="10:30">10:30 am</option>
                <option value="10:45">10:45 am</option>
                <option value="11:00">11:00 am</option>
                <option value="11:15">11:15 am</option>
                <option value="11:30">11:30 am</option>
                <option value="11:45">11:45 am</option>
                <option value="12:00">12:00 pm</option>
                <option value="12:15">12:15 pm</option>
                <option value="12:30">12:30 pm</option>
                <option value="12:45">12:45 pm</option>
                <option value="13:00">01:00 pm</option>
                <option value="13:15">01:15 pm</option>
                <option value="13:30">01:30 pm</option>
                <option value="13:45">01:45 pm</option>
                <option value="14:00">02:00 pm</option>
                <option value="14:15">02:15 pm</option>
                <option value="14:30">02:30 pm</option>
                <option value="14:45">02:45 pm</option>
                <option value="15:00">03:00 pm</option>
                <option value="15:15">03:15 pm</option>
                <option value="15:30">03:30 pm</option>
                <option value="15:45">03:45 pm</option>
                <option value="16:00">04:00 pm</option>
                <option value="16:15">04:15 pm</option>
                <option value="16:30">04:30 pm</option>
                <option value="16:45">04:45 pm</option>
                <option value="17:00">05:00 pm</option>
                <option value="17:15">05:15 pm</option>
                <option value="17:30">05:30 pm</option>
                <option value="17:45">05:45 pm</option>
                <option value="18:00">06:00 pm</option>
                <option value="18:15">06:15 pm</option>
                <option value="18:30">06:30 pm</option>
                <option value="18:45">06:45 pm</option>
                <option value="19:00">07:00 pm</option>
                <option value="19:15">07:15 pm</option>
                <option value="19:30">07:30 pm</option>
                <option value="19:45">07:45 pm</option>
                <option value="20:00">08:00 pm</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl required className={classes.formControl}>
              <InputLabel
                htmlFor="age-native-required"
                required
                className={classes.formControl}
              >
                Select Hall
              </InputLabel>
              <Select
                native
                onChange={(event) => {
                  setConfHall(event.target.value);
                  var meetdate = fromdate;

                  while (
                    moment(meetdate, "YYYY-MM-DD").isSameOrBefore(todate)
                  ) {
                    checkAvailability([
                      meetdate,
                      fromtime,
                      totime,
                      event.target.value,
                      todate,
                    ]);
                    meetdate = moment(meetdate, "YYYY-MM-DD")
                      .clone()
                      .add(1, "days")
                      .format("YYYY-MM-DD");
                    if (num == 1);
                    {
                      break;
                    }
                  }
                }}
                value={confhall}
                style={{ width: "100%" }}
              >
                <option aria-label="None" value="" />
                <option value="Conference Hall">Conference Hall</option>
                <option value="Learning Hall">Learning Hall</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Number Of Members"
              fullWidth
              onChange={(event) => {
                setTotalMembers(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              label="Meeting Organizer"
              fullWidth
              onChange={(event) => {
                setMeetingOrganizer(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              type="email"
              // required
              label="Email"
              fullWidth
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              type="number"
              required
              label="Mobile No."
              fullWidth
              inputProps={{ maxLength: 10 }}
              onChange={(event) => {
                setMobile1(event.target.value);
              }}
            />
          </Grid>
          {/* <Grid item xs={12} sm={4}>
            <TextField
              type="number"
              label="Alternate No."
              fullWidth
              inputProps={{ maxLength: 10 }}
              onChange={(event) => {
                setMobile2(event.target.value);
              }}
            />
          </Grid> */}
          <Grid item xs={12} sm={4}>
            <FormControl required className={classes.formControl}>
              <InputLabel
                htmlFor="age-native-required"
                // required
                className={classes.formControl}
              >
                Department
              </InputLabel>
              <Select
                native
                onChange={(event) => {
                  setDepartment(event.target.value);
                }}
                style={{ width: "100%" }}
              >
                <option aria-label="None" value="" />
                <option value="Supply Chain">Supply Chain</option>
                <option value="System and Strategy">System and Strategy</option>
                <option value="Core Shop">Core Shop</option>
                <option value="Moulding">Moulding</option>
                <option value="Melting">Melting</option>
                <option value="Fettling">Fettling</option>
                <option value="HR">HR</option>
                <option value="IT">IT</option>
                <option value="I-QUB">I-QUB</option>
                <option value="PPC">PPC</option>
                <option value="Purchase">Purchase</option>
                <option value="Marketing">Marketing</option>
                <option value="Foundry Maintenance">Foundry Maintenance</option>
                <option value="Spectro">Spectro</option>
                <option value="Quality Assurance">Quality Assurance</option>
                <option value="Foundry Process Control">
                  Foundry Process Control
                </option>
                <option value="Spectro">Spectro</option>
                <option value="Quality Assurance">Quality Assurance</option>
                <option value="Other">Other</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Button
                type="submit"
                style={{
                  fontSize: "18px",
                }}
                disabled={submitState}
                color="primary"
                variant="contained"
                onClick={() => {
                  ToDatevalidation([fromdate, todate]);
                  timevalidation([fromtime, totime]);
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
