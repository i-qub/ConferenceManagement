import React, { useState } from "react";
import axios from "axios";
import {
  removeUserSession,
  setUserSession,
} from "../../components/Utils/Common";
import {
  Grid,
  CircularProgress,
  Typography,
  Button,
  TextField,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import EmpRegiPopup from "../../components/Popup/EmpRegiPopup";
// styles
import useStyles from "./styles";

// logo
import logo from "./logo.png";
import logo1 from "./logo1.png";
import SignUp from "./SignUp";
import ForgotPasswordPopup from "../../components/Popup/ForgotPasswordPopup";
import ForgotPassword from "./ForgotPassword";
import { LaptopWindows } from "@material-ui/icons";

function Login(props) {
  var classes = useStyles();

  //Greeting Label
  const date = new Date();
  const hour = date.getHours();

  //Login
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const [error, setError] = useState(null);
  const [openNewEmployeePopup, setOpenNewEmployeePopup] = useState(false);
  const [openForgotPasswordPopup, setOpenForgotPasswordPopup] = useState(false);

  const handleOpenForEdit = async (obj) => {
    // setEditData(obj);
    setOpenNewEmployeePopup(true);
  };
  const handleOpen = () => {
    setOpenNewEmployeePopup(true);
  };
  const handleClickClose = () => {
    setOpenNewEmployeePopup(false);
    // setOpenForgotPasswordPopup(false);
  };
  const handleClickClose1 = () => {
    setOpenForgotPasswordPopup(false);
  };
  const handleForgotPassword = () => {
    setOpenForgotPasswordPopup(true);
  };
  // handle button click of login form
  const logout = () => {
    removeUserSession();
    props.history.push("/login");
  };
  const errorLogin = () =>{
    
    props.history.push("/login");
  }
  const login = () => {
    setError(null);
    setLoading(true);
    axios
      .post("http://localhost:3000/login/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        if(response.data.user.length > 0){
          setLoading(false);
          setUserSession(response.data.token, response.data.user);
          props.history.push("/dashboard");
          return;
        }else{
          window.location.assign("/");
        }
      })
      .catch((error) => {
        console.log("91",error)
        // window.location.assign("/");
        // setLoading(false);
        // setError(error);
        // alert(error);
        // logout();
        // errorLogin();
       
      });
  };

  return (
    <>
      <Grid container className={classes.container}>
        <div className={classes.logotypeContainer}>
          <img src={logo} alt="logo" className={classes.logotypeImage} />
          <Typography
            className={classes.logotypeText}
            style={{ fontFamily: "Times new Roman", fontSize: "5rem" }}
          >
            Menon & Menon Ltd.
          </Typography>
        </div>
        <div className={classes.formContainer}>
          <div className={classes.form}>
            <img src={logo1} alt="logo" className={classes.logotypeImage1} />
            <Typography variant="h4" className={classes.greeting}>
              {hour >= 12
                ? hour >= 16
                  ? "Good Evening..!"
                  : "Good Afternoon..!"
                : "Good Morning..!"}
            </Typography>
            <hr></hr>
            <React.Fragment>
              <Typography
                style={{
                  textAlign: "center",
                  color: "black",
                  fontSize: "1.5rem",
                  textShadow: "0 0 3px black",
                  fontFamily: "sans-serif",
                  padding: "15px",
                }}
              >
                LOGIN
              </Typography>
              <Typography color="secondary" className={classes.errorMessage}>
                {error}
              </Typography>
              <TextField
                required
                id="token"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
                margin="normal"
                placeholder="Token No."
                type="number"
                fullWidth
              />
              <TextField
                required
                id="password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                margin="normal"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                fullWidth
              />
              <div className={classes.formButtons}>
                {loading ? (
                  <CircularProgress size={26} className={classes.loginLoader} />
                ) : (
                  <Button
                    disabled={username.length === 0 || password.length < 6}
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={login}
                  >
                    Login
                  </Button>
                )}
                <Button
                  color="primary"
                  className={classes.forgetButton}
                  onClick={handleForgotPassword}
                >
                  Forgot Password?
                </Button>
              </div>
              <br/> 
              <Button
                color="primary"
                variant="contained"
                // className={classes.signUpButton}
                onClick={handleOpen}
              >
                Sign Up
              </Button>
            </React.Fragment>
          </div>
          <br/>
          <br/>
          
          <Typography color="primary" className={classes.copyright}>
            © {new Date().getFullYear()}{" "}
            <a
              style={{ textDecoration: "none", color: "inherit" }}
              href="https://menon.in"
              rel="noopener noreferrer"
              target="_blank"
            >
              Menon and Menon Ltd.
            </a>{" "}
            All rights reserved.
          </Typography>
        </div>
        <EmpRegiPopup
          openEmployeesPopup={openNewEmployeePopup}
          onClose={handleClickClose}
        >
          <SignUp onSubmitClose={handleClickClose} />
        </EmpRegiPopup>
        <ForgotPasswordPopup
          openForgotPasswordPopup={openForgotPasswordPopup}
          // setOpenForgotPasswordPopup={setOpenForgotPasswordPopup}
          onClose={handleClickClose1}
        >
          <ForgotPassword />
        </ForgotPasswordPopup>
      </Grid>
    </>
  );
}

export default withRouter(Login);
