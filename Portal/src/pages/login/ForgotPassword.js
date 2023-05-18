import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Button, Typography } from "@material-ui/core";
import axios from "axios";

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     width: "100%",
//   },
// }));

export default function ForgotPassword(props) {
  const { onSubmitClose } = props;
  const { setopenForgotPasswordPopup } = props;
  // const classes = useStyles();
  const [empDetails, setEmpDetails] = useState({});
  const [password, setPassword] = useState("");
  const [tokenNumber, setTokenNumber] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [adminPassword, setAdminPassword] = useState("");

  const [error, setError] = useState(null);

  const getUser = async (tokenNumber) => {
    await axios
      .get(
        `http://192.168.1.52:3000/login/getUserInfoByUserId?userId=${tokenNumber}`,
      )
      .then((response) => {
        setEmpDetails(response.data.data);
      });
  };
  const forgotPassword = (event) => {
    // event.preventDefault();

    let newEmpDetails = { ...empDetails, password: password };
    console.log(newEmpDetails);
    axios
      .post(`http://192.168.1.52:3000/login/updateUser`, {
        ...newEmpDetails,
      })
      .then((response) => {
        console.log(response);
      }
      );
      onSubmitClose();
  };
  function passwordlength(password) {
    if (password.length < 6) {
      alert("Password must not be less then 6 characters");
    }
  }
  return (
    <>
      <form
        onSubmit={() => {
          if (adminPassword === "menon12345") {
            forgotPassword();
            console.log("66");
          } else {
            alert("Incorrect Admin Password ");
            setopenForgotPasswordPopup(true);
            setAdminPassword("");
          }
        }}
      >
        <Grid container spacing={2}>
          <Typography color="secondary">{error}</Typography>
          <Grid item xs={12}>
            <TextField
              required
              type="number"
              label="Token Number"
              fullWidth
              value={tokenNumber}
              onChange={(e) => setTokenNumber(e.target.value)}
              onBlur={(e) => {
                getUser(e.target.value);
                console.log(empDetails);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              type="password"
              label="Administrator Password"
              fullWidth
              value={adminPassword}
              onChange={(e) => {
                setAdminPassword(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              type="password"
              label="Enter new Password"
              fullWidth
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              onBlur={(e) => {
                passwordlength(e.target.value);
              }}
            />
            <TextField
              required
              type="password"
              label="Re-Enter new password"
              fullWidth
              value={passwordCheck}
              onChange={(e) => {
                setPasswordCheck(e.target.value);
              }}
              onBlur={(e) => {
                if (e.target.value === password) {
                  alert("New password is matching");
                } else {
                  alert("New password doesnt match");
                  setPassword("");
                  setPasswordCheck("");
                }
              }}
            />
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
                // dd
              >
                Reset Password
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
