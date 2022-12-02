import React, { useState, useEffect } from "react";
import Axios from "axios";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Radio from "@material-ui/core/Radio";
// import RadioGroup from "@material-ui/core/RadioGroup";
// import FormLabel from "@material-ui/core/FormLabel";
import { Button } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
// import axios from "axios";
// import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "100%",
  },
}));

export default function ContractorEdit(props) {
  const { onSubmitClose } = props;
  const classes = useStyles();
  // const [status, setStatus] = useState(undefined);
  const [_id, setId] = useState("");
  const [meettitle, setMeettitle] = useState("");
  const [meetdate, setDOB] = useState("");
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

  useEffect(() => {
    // let mounted = true;
    console.log("42", props.editData._id);
    setId(props.editData._id);
    setMeettitle(props.editData.meettitle);
    setDOB(props.editData.meetdate);
    setFTime(props.editData.fromtime);
    setTTime(props.editData.totime);
    // setPriority(props.editData.priority);
    setConfHall(props.editData.confhall);
    setTotalMembers(props.editData.totalmembers);
    setMeetingOrganizer(props.editData.meetingorganizer);
    setEmail(props.editData.email);
    setMobile1(props.editData.mobile1);
    setMobile2(props.editData.mobile2);
    setDepartment(props.editData.dept);
  }, []);

  const ContractorEdit = (event) => {
    // const { id } = useParams();
    event.preventDefault();
    Axios.post(
      "http://localhost:3000/con/update",
      {
        id: _id,
        meettitle: meettitle,
        meetdate: meetdate,
        fromtime: fromtime,
        totime: totime,
        // priority: priority,
        confhall: confhall,
        totalmembers: totalmembers,
        meetingorganizer: meetingorganizer,
        email: email,
        mobile1: mobile1,
        mobile2: mobile2,
        dept: dept,
      },
      onSubmitClose(),
    );
    window.location.reload();
  };

  return (
    <>
      <form onSubmit={ContractorEdit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              label="Conference Meeting Title"
              fullWidth
              value={meettitle}
              onChange={(event) => {
                setMeettitle(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              type="date"
              label="Metting date"
              fullWidth
              value={meetdate}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(event) => {
                setDOB(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              type="time"
              label="From Time"
              fullWidth
              value={fromtime}
              onChange={(event) => {
                setFTime(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              type="time"
              label="To Time"
              fullWidth
              value={totime}
              onChange={(event) => {
                setTTime(event.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <FormControl required className={classes.formControl}>
              <InputLabel
                htmlFor="age-native-required"
                required
                className={classes.formControl}
              >
                Select Conference Hall
              </InputLabel>
              <Select
                native
                onChange={(event) => {
                  setConfHall(event.target.value);
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
              value={totalmembers}
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
              value={meetingorganizer}
              onChange={(event) => {
                setMeetingOrganizer(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              label="Email"
              fullWidth
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              label="Mobile No."
              fullWidth
              value={mobile1}
              inputProps={{ maxLength: 10 }}
              onChange={(event) => {
                setMobile1(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Alternate No."
              fullWidth
              value={mobile2}
              inputProps={{ maxLength: 10 }}
              onChange={(event) => {
                setMobile2(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl required className={classes.formControl}>
              <InputLabel
                htmlFor="age-native-required"
                required
                className={classes.formControl}
              >
                Department
              </InputLabel>
              <Select
                native
                value={dept}
                onChange={(event) => {
                  setDepartment(event.target.value);
                }}
                style={{ width: "100%" }}
              >
                <option aria-label="None" value="" />
                <option value="Anywhere">Anywhere</option>
                <option value="Core Shop">Core Shop</option>
                <option value="Moulding">Moulding</option>
                <option value="Melting">Melting</option>
                <option value="Fettling">Fettling</option>
                <option value="HR">HR</option>
                <option value="IT">IT</option>
                <option value="I-QUB">I-QUB</option>
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
                color="primary"
                variant="contained"
              >
                Update
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
