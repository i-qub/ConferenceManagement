import React, { useState } from 'react';
import Axios from 'axios';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import { Button } from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '100%',
  }
}));

export default function ConRegistration(props) {
  const { onSubmitClose } = props;
  const classes = useStyles();
  const [status, setStatus] = useState(undefined);
  const [meettitle, setName] = useState("");
  const [meetdate, setDOB] = useState("");
  const [fromtime, setFTime] = useState("");
  const [totime, setTTime] = useState("");
  const [priority, setPriority] = useState("");
  const [confhall, setConfHall] = useState("");
  const [totalmembers, setTotalMembers] = useState("");
  const [meetingorganizer, setMeetingOrganizer] = useState("");
  const [email, setEmail] = useState("");
  const [mobile1, setMobile1] = useState("");
  const [mobile2, setMobile2] = useState("");
  const [dept, setDepartment] = useState("");

  const newContractor = (event) => {
    event.preventDefault();
    Axios.post("http://localhost:3000/con/addContractor", {
      meettitle:meettitle,
      meetdate: meetdate,
      fromtime:fromtime,
      totime:totime,
      priority:priority,
      confhall:confhall,
      totalmembers:totalmembers,
      meetingorganizer:meetingorganizer,
      email: email,
      mobile1: mobile1,
      mobile2: mobile2,
      dept: dept
    },
      onSubmitClose());
    window.location.reload();
  };

  return (
    <>
      <form onSubmit={newContractor}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              label="Conference Meeting Title"
              fullWidth
              onChange={(event) => { setName(event.target.value); }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              type="date"
              label="Metting date"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(event) => { setDOB(event.target.value); }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="From Time"
              fullWidth
              onChange={(event) => { setFTime(event.target.value); }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="To Time"
              fullWidth
              onChange={(event) => { setTTime(event.target.value); }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Priority"
              fullWidth
              onChange={(event) => { setPriority(event.target.value); }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl required className={classes.formControl}>
              <InputLabel htmlFor="age-native-required" required className={classes.formControl}>Select Conference Hall</InputLabel>
              <Select
                native
                onChange={(event) => { setConfHall(event.target.value); }}
                style={{ width: '100%' }}
              >
                <option aria-label="None" value="" />
                <option value="Conference_Hall_1">Conference Hall 1</option>
                <option value="Conference_Hall_2">Conference Hall 2</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Number Of Members"
              fullWidth
              onChange={(event) => { setTotalMembers(event.target.value); }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              label="Meeting Organizer"
              fullWidth
              onChange={(event) => { setMeetingOrganizer(event.target.value); }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              label="Email"
              fullWidth
              onChange={(event) => { setEmail(event.target.value); }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              label="Mobile No."
              fullWidth
              inputProps={{ maxLength: 10 }}
              onChange={(event) => { setMobile1(event.target.value); }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Alternate No."
              fullWidth
              inputProps={{ maxLength: 10 }}
              onChange={(event) => { setMobile2(event.target.value); }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl required className={classes.formControl}>
              <InputLabel htmlFor="age-native-required" required className={classes.formControl}>Department</InputLabel>
              <Select
                native
                onChange={(event) => { setDepartment(event.target.value); }}
                style={{ width: '100%' }}
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
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
