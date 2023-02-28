import React, { useEffect, useState } from "react";
import axios from "axios";
// components
import { Button, Dialog, DialogActions, DialogTitle, FormControl, Grid, InputLabel, LinearProgress, Select } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Typography } from "../../../components/Wrappers/Wrappers";
import Widget from "../../../components/Widget/Widget";
import ViewEmployeesPopup from "../../../components/Popup/ViewEmployeesPopup";
import GraphicalManpowerPopup from "../../../components/Popup/GraphicalManpowerPopup";
import ActualEmployees from "./ActualEmployees";
import ActualGraphicalView from "./ActualGraphicalView";
import PageTitle from "../../../components/PageTitle/PageTitle";
import { makeStyles } from '@material-ui/core/styles';
import * as Icons from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '100%',
  }
}));

function ActualManpower() {
  const classes = useStyles();

  const [shell_core, set_shell_core] = useState('');
  const [cold_box, set_cold_box] = useState('');
  const [arpa_900, set_arpa_900] = useState('');
  const [arpa_450, set_arpa_450] = useState('');
  const [w_b_q_3, set_w_b_q_3] = useState('');
  const [hand_moulding, set_hand_moulding] = useState('');
  const [melting, set_melting] = useState('');
  const [fettling, set_fettling] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [subdept, setSubDept] = useState("");

  const [open, setOpen] = useState(false);
  const [openEmployeesPopup, setOpenEmployeesPopup] = useState(false);
  const [openGraphicalManpowerPopup, setGraphicalManpowerPopup] = useState(false);

  const handleClickOpen = () => { setOpen(true); };

  const handleClickClose = () => { setOpen(false); };

  const GraphicalPopup = () => { setOpen(false); setGraphicalManpowerPopup(true); };

  const EmployeesPopup = () => { setOpen(false); setOpenEmployeesPopup(true); };

  const handleClose = () => { setOpenEmployeesPopup(false); setGraphicalManpowerPopup(false); };

  var date = new Date();
  var hour = date.getHours();
  var getShift;

  if (hour >= 8 && hour <= 15) { getShift = "Shift I"; } else if (hour >= 16 && hour <= 23) { getShift = "Shift II"; }
  else { getShift = "Shift III"; }

  const [shift, setShift] = useState(getShift);

  const [reqs_shell_core, req_shell_core] = useState('');
  const [reqs_cold_box, req_cold_box] = useState('');
  const [reqs_arpa_900, req_arpa_900] = useState('');
  const [reqs_arpa_450, req_arpa_450] = useState('');
  const [reqs_w_b_q_3, req_w_b_q_3] = useState('');
  const [reqs_hand_moulding, req_hand_moulding] = useState('');
  const [reqs_melting, req_melting] = useState('');
  const [reqs_fettling, req_fettling] = useState('');

  useEffect(() => {
    axios.get('http://192.168.1.52:3000/req/shell_core').then((response) => { req_shell_core(response.data[0].requirement); });
    axios.get('http://192.168.1.52:3000/req/cold_box').then((response) => { req_cold_box(response.data[0].requirement); });
    axios.get('http://192.168.1.52:3000/req/arpa_900').then((response) => { req_arpa_900(response.data[0].requirement); });
    axios.get('http://192.168.1.52:3000/req/arpa_450').then((response) => { req_arpa_450(response.data[0].requirement); });
    axios.get('http://192.168.1.52:3000/req/w_b_q_3').then((response) => { req_w_b_q_3(response.data[0].requirement); });
    axios.get('http://192.168.1.52:3000/req/hand_moulding').then((response) => { req_hand_moulding(response.data[0].requirement); });
    axios.get('http://192.168.1.52:3000/req/melting').then((response) => { req_melting(response.data[0].requirement); });
    axios.get('http://192.168.1.52:3000/req/fettling').then((response) => { req_fettling(response.data[0].requirement); });

    axios.post('http://192.168.1.52:3000/mp/getAllocationData_shell_core', { verified: 'YES', shift: shift }).then((response) => { set_shell_core(response.data[0].count); });
    axios.post('http://192.168.1.52:3000/mp/getAllocationData_cold_box', { verified: 'YES', shift: shift }).then((response) => { set_cold_box(response.data[0].count); });
    axios.post('http://192.168.1.52:3000/mp/getAllocationData_arpa_900', { verified: 'YES', shift: shift }).then((response) => { set_arpa_900(response.data[0].count); });
    axios.post('http://192.168.1.52:3000/mp/getAllocationData_arpa_450', { verified: 'YES', shift: shift }).then((response) => { set_arpa_450(response.data[0].count); });
    axios.post('http://192.168.1.52:3000/mp/getAllocationData_w_b_q_3', { verified: 'YES', shift: shift }).then((response) => { set_w_b_q_3(response.data[0].count); });
    axios.post('http://192.168.1.52:3000/mp/getAllocationData_hand_moulding', { verified: 'YES', shift: shift }).then((response) => { set_hand_moulding(response.data[0].count); });
    axios.post('http://192.168.1.52:3000/mp/getAllocationData_melting', { verified: 'YES', shift: shift }).then((response) => { set_melting(response.data[0].count); });
    axios.post('http://192.168.1.52:3000/mp/getAllocationData_fettling', { verified: 'YES', shift: shift }).then((response) => { set_fettling(response.data[0].count); setLoading(false); });
  }, [shift]);

  var requirements = parseInt(reqs_shell_core) + parseInt(reqs_cold_box) + parseInt(reqs_arpa_900) + parseInt(reqs_arpa_450) + parseInt(reqs_w_b_q_3) + parseInt(reqs_hand_moulding) + parseInt(reqs_melting) + parseInt(reqs_fettling);
  const availability = parseInt(shell_core) + parseInt(cold_box) + parseInt(arpa_900) + parseInt(arpa_450) + parseInt(w_b_q_3) + parseInt(hand_moulding) + parseInt(melting) + parseInt(fettling);


  function refreshPage(e) {
    e.preventDefault();
    window.location.reload(false);
  }

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <>
      <Grid container spacing={2} >
        <Grid item xs={12} sm={4}>
          <PageTitle title="Actual Manpower" />
        </Grid>
        <Grid item xs={8} sm={2}>
          <FormControl required className={classes.formControl}>
            <InputLabel htmlFor="age-native-required" required className={classes.formControl}>Select Shift</InputLabel>
            <Select
              native
              value={shift}
              onChange={(event) => { setShift(event.target.value); }}
              style={{ width: '90%' }}
            >
              <option aria-label="None" value="" />
              <option value="Shift I">Shift I</option>
              <option value="Shift II">Shift II</option>
              <option value="Shift III">Shift III</option>
              <option value="Odd Shift">Odd Shift</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4} sm={1}>
          <Button
            variant="contained"
            size="medium"
            color="primary"
            onClick={refreshPage}
          >
            <Icons.Refresh />
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ textAlign: 'center' }}>
        <Grid item xs={12}>
          <Widget title="Overall Manpower" >
            {/* <div style={{ fontSize: "1.3rem", textAlign: 'left', padding: "5px", fontFamily: "Times New Roman" }}>
              L3 :
              <LinearProgress variant="determinate" value={77} color="primary" />
            </div>
            <div style={{ fontSize: "1.3rem", textAlign: 'left', padding: "5px", fontFamily: "Times New Roman" }}>
              L2 :
              <LinearProgress variant="determinate" value={88} color="secondary" />
            </div>
            <div style={{ fontSize: "1.3rem", textAlign: 'left', padding: "5px", fontFamily: "Times New Roman" }}>
              L1 :
              <LinearProgress variant="determinate" value={60} color="primary" />
            </div> */}
            <div style={{ fontSize: "1.3rem", textAlign: 'left', padding: "5px", fontFamily: "Times New Roman" }}>
              Requirement : {requirements}
              <LinearProgress variant="determinate" value={100} color="secondary" />
            </div>
            <div style={{ fontSize: "1.3rem", textAlign: 'left', padding: "5px", fontFamily: "Times New Roman" }}>
              Availability : {availability}
              <LinearProgress variant="determinate" value={availability / 2} color="primary" />
            </div>
            <div style={{ fontSize: "1.3rem", textAlign: 'left', padding: "5px", fontFamily: "Times New Roman" }}>
              Difference : {requirements - availability}
              <LinearProgress variant="determinate" value={(requirements - availability) / 2 - 3} color="secondary" />
            </div>
          </Widget>
        </Grid>
        <Grid item xs={12}>
          <div style={{ fontSize: "1.5rem", textAlign: "center", margin: 0 }}> Core Shop </div>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Card style={{ backgroundColor: "#405bf6", color: "#ffff" }} onClick={() => { handleClickOpen(); setSubDept('Shell Core'); }}>
            <CardActionArea>
              <CardContent>
                <Typography style={{ fontSize: "1.5rem" }}>
                  Shell Core
                </Typography>
                <br></br>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Requirement
                    </Typography>
                    <Typography size="md">{reqs_shell_core}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Availability
                    </Typography>
                    <Typography size="md">{shell_core}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Difference
                    </Typography>
                    <Typography size="md">{reqs_shell_core - shell_core}</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid >
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Card style={{ backgroundColor: "#405bf6", color: "#ffff" }} onClick={() => { handleClickOpen(); setSubDept('Cold Box'); }} >
            <CardActionArea>
              <CardContent>
                <Typography style={{ fontSize: "1.5rem" }}>
                  Cold Box
                </Typography>
                <br></br>
                <Grid container direction="row" justifyContent="space-between" alignItems="center">
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Requirement
                    </Typography>
                    <Typography size="md">{reqs_cold_box}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Availability
                    </Typography>
                    <Typography size="md">{cold_box}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Difference
                    </Typography>
                    <Typography size="md">{reqs_cold_box - cold_box}</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid >
        <Grid item xs={12}>
          <div style={{ fontSize: "1.5rem", textAlign: "center", margin: 0 }}> Moulding </div>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Card style={{ backgroundColor: "#ff8129", color: "#ffff" }} onClick={() => { handleClickOpen(); setSubDept('Arpa 900'); }}>
            <CardActionArea>
              <CardContent>
                <Typography style={{ fontSize: "1.5rem" }}>
                  Arpa 900
                </Typography>
                <br></br>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Requirement
                    </Typography>
                    <Typography size="md">{reqs_arpa_900}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Availability
                    </Typography>
                    <Typography size="md">{arpa_900}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Difference
                    </Typography>
                    <Typography size="md">{reqs_arpa_900 - arpa_900}</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid >
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Card style={{ backgroundColor: "#ff8129", color: "#ffff" }} onClick={() => { handleClickOpen(); setSubDept('Arpa 450'); }} >
            <CardActionArea>
              <CardContent>
                <Typography style={{ fontSize: "1.5rem" }}>
                  Arpa 450
                </Typography>
                <br></br>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Requirement
                    </Typography>
                    <Typography size="md">{reqs_arpa_450}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Availability
                    </Typography>
                    <Typography size="md">{arpa_450}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Difference
                    </Typography>
                    <Typography size="md">{reqs_arpa_450 - arpa_450}</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid >
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Card style={{ backgroundColor: "#ff8129", color: "#ffff" }} onClick={() => { handleClickOpen(); setSubDept('W B Q 3'); }} >
            <CardActionArea>
              <CardContent>
                <Typography style={{ fontSize: "1.5rem" }}>
                  W.B.Q.3
                </Typography>
                <br></br>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Requirement
                    </Typography>
                    <Typography size="md">{reqs_w_b_q_3}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Availability
                    </Typography>
                    <Typography size="md">{w_b_q_3}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Difference
                    </Typography>
                    <Typography size="md">{reqs_w_b_q_3 - w_b_q_3}</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid >
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Card style={{ backgroundColor: "#ff8129", color: "#ffff" }} onClick={() => { handleClickOpen(); setSubDept('Hand Moulding'); }} >
            <CardActionArea>
              <CardContent>
                <Typography style={{ fontSize: "1.5rem" }}>
                  Hand Moulding
                </Typography>
                <br></br>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Requirement
                    </Typography>
                    <Typography size="md">{reqs_hand_moulding}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Availability
                    </Typography>
                    <Typography size="md">{hand_moulding}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Difference
                    </Typography>
                    <Typography size="md">{reqs_hand_moulding - hand_moulding}</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid >
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Grid item xs={12}>
            <div style={{ fontSize: "1.5rem", textAlign: "center", margin: 0 }}> Melting </div>
          </Grid>
          <br></br>
          <Card style={{ backgroundColor: "#405bf6", color: "#ffff" }} onClick={() => { handleClickOpen(); setSubDept('Melting'); }} >
            <CardActionArea>
              <CardContent>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Requirement
                    </Typography>
                    <Typography size="md">{reqs_melting}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Availability
                    </Typography>
                    <Typography size="md">{melting}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Difference
                    </Typography>
                    <Typography size="md">{reqs_melting - melting}</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid >
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Grid item xs={12}>
            <div style={{ fontSize: "1.5rem", textAlign: "center", margin: 0 }}> Fettling </div>
          </Grid>
          <br></br>
          <Card style={{ backgroundColor: "#ff8129", color: "#ffff" }} onClick={() => { handleClickOpen(); setSubDept('Fettling'); }} >
            <CardActionArea>
              <CardContent>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Requirement
                    </Typography>
                    <Typography size="md">{reqs_fettling}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Availability
                    </Typography>
                    <Typography size="md">{fettling}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography colorBrightness="secondary" noWrap>
                      Difference
                    </Typography>
                    <Typography size="md">{reqs_fettling - fettling}</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid >
      </Grid>
      <div>
        <Dialog open={open} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">
            <div style={{ display: 'flex' }}>
              <div style={{ flexGrow: 1, fontWeight: 'bold', paddingTop: '5px' }}>View Details</div>
              <Button
                style={{
                  fontSize: "16px",
                  minWidth: "8px",
                  maxHeight: "35px"
                }}
                color="secondary"
                variant="contained"
                onClick={handleClickClose}
              >
                <b> X </b>
              </Button>
            </div>
          </DialogTitle>
          <DialogActions>
            <Button onClick={EmployeesPopup} color="primary">
              All Employee List
            </Button>
            <Button onClick={GraphicalPopup} color="primary">
              Graphical View
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <ViewEmployeesPopup
        openEmployeesPopup={openEmployeesPopup}
        onClose={handleClose}
      >
        <Button
          color='primary'
          variant='contained'
        >
          Absent Report
        </Button>
        <br></br>
        <br></br>
        <ActualEmployees
          subdept={subdept}
          shift={shift}
        />
      </ViewEmployeesPopup>
      <GraphicalManpowerPopup
        openGraphicalManpowerPopup={openGraphicalManpowerPopup}
        onClose={handleClose}
      >
        <ActualGraphicalView
          subdeptManpower={subdept}
          shift={shift}
        />
      </GraphicalManpowerPopup>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}

export default ActualManpower;