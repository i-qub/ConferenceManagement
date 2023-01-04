import React, { useState} from "react";
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
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);
const adminPassword = "123456";
  const forgotPassword = (event) => {
    // console.log("51");
    event.preventDefault();
    axios
      .get(
        `http://localhost:3000/login/getUserInfoByUserId?userId=${empDetails.token}`,
      )
      .then((response) => {
        setEmpDetails(response.data.data);
        // console.log(response.data);
      });

    let newEmpDetails = { ...empDetails, password: "123456" };
    console.log(newEmpDetails);
    axios
      .post(`http://localhost:3000/login/updateUser`, {
        ...newEmpDetails,
      })
      .then((response) => {
        console.log("68", response);
      });
      onSubmitClose();
  };
  return (
    <>
      <form onSubmit={()=>{if(adminPassword===password) 
                  {forgotPassword()}
                else
                { 
                  alert("Incorrect Admin Password ");
                  setopenForgotPasswordPopup(true);
                  setPassword("");}}}>
        <Grid container spacing={2}>
          <Typography color="secondary">{error}</Typography>
          <Grid item xs={12}>
            <TextField
              required
              type="number"
              label="Token Number"
              fullWidth
              value={empDetails.token}
              onChange={(e) => {
                let newEmpDetails = { ...empDetails, token: e.target.value };
                setEmpDetails(newEmpDetails);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              type="password"
              label="Administrator Password"
              fullWidth
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
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
