import React, { useState, } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Button, Typography } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
// import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
// import { clockClasses } from "@mui/x-date-pickers";

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     width: "100%",
//   },
// }));

export default function SignUp(props) {
  const { onSubmitClose } = props;
  // const classes = useStyles();
  const [empDetails, setEmpDetails] = useState({ token: 0, name: "" });
  // const [token, setToken] = useState("");
  const [ setLoading] = useState(false);
  const [error, setError] = useState(null);

  const newEmployee = (event) => {
    event.preventDefault();
    axios
      .post(
        "http://localhost:3000/login/signUp",
        {
          ...empDetails,
        },
        alert("New User Registered"),
        onSubmitClose(),
      )
      .then((response) => {
        // alert("New User Registered");
        setLoading(false);

        return;
      })
      .catch((error) => {
        setLoading(false);
        setError(error.response.data.message);
      });
    window.location.reload();
  };

  return (
    <>
      <form onSubmit={newEmployee}>
        <Grid container spacing={2}>
          <Typography color="secondary">{error}</Typography>
          <Grid item xs={12}>
            <TextField
              required
              type="Number"
              label="Token Number"
              fullWidth
              value={empDetails.token}
              onChange={(e) => {
                let newEmpDetails = { ...empDetails, token: e.target.value };
                setEmpDetails(newEmpDetails);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              type="String"
              label="Name"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => {
                let newEmpDetails = { ...empDetails, name: e.target.value };
                setEmpDetails(newEmpDetails);
              }}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <label>Date of Birth</label>

            <TextField
              type="Date"
              // label="Date of Birth"
              fullWidth
              onChange={(e) => {
                let newEmpDetails = { ...empDetails, dob: e.target.value };
                setEmpDetails(newEmpDetails);
              }}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              required
              label="Gender"
              fullWidth
              onChange={(e) => {
                let newEmpDetails = { ...empDetails, gender: e.target.value };
                setEmpDetails(newEmpDetails);
              }}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              type="String"
              label="email"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => {
                let newEmpDetails = {
                  ...empDetails,
                  contractor: e.target.value,
                };
                setEmpDetails(newEmpDetails);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              type="String"
              label="Mobile Number"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => {
                let newEmpDetails = { ...empDetails, mobile1: e.target.value };
                setEmpDetails(newEmpDetails);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              type="String"
              label="Alternate Mobile Number"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => {
                let newEmpDetails = { ...empDetails, mobile2: e.target.value };
                setEmpDetails(newEmpDetails);
              }}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              type="Password"
              label="Set Password"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => {
                let newEmpDetails = { ...empDetails, password: e.target.value };
                setEmpDetails(newEmpDetails);
              }}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <FormControl required>
              <InputLabel
                htmlFor="age-native-required"
                required
                InputLabelProps={{
                  shrink: true,
                }}
              >
                Department
              </InputLabel>
              <Select
                native
                onChange={(e) => {
                  let newEmpDetails = { ...empDetails, dept: e.target.value };
                  setEmpDetails(newEmpDetails);
                }}
                // style={{ width: "100%" }}
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
            {/* <TextField
              type="String"
              label="Department"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => {
                let newEmpDetails = { ...empDetails, dept: e.target.value };
                setEmpDetails(newEmpDetails);
              }}
            /> */}
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl required>
              <InputLabel
                htmlFor="age-native-required"
                required
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              >
                Verified
              </InputLabel>
              <Select
                native
                onChange={(e) => {
                  let newEmpDetails = {
                    ...empDetails,
                    verified: e.target.value,
                  };
                  setEmpDetails(newEmpDetails);
                }}
                style={{ width: "100%" }}
              >
                <option aria-label="None" value="" />
                <option value="YES">YES</option>
                <option value="NO">NO</option>
              </Select>
            </FormControl>
            {/* <TextField
              type="String"
              label="Verified"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => {
                let newEmpDetails = { ...empDetails, verified: e.target.value };
                setEmpDetails(newEmpDetails);
              }}
            /> */}
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
