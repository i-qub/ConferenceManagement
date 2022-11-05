import { Button, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Dialog, DialogActions, DialogTitle } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import axios from "axios";
import MaterialTable from 'material-table';
import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { getUser } from "../../components/Utils/Common";
import PageTitle from "../../components/PageTitle/PageTitle";
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

const theme = createTheme({
  overrides: {
    MuiTableCell: {
      root: {
        paddingTop: 10,
        paddingBottom: 10,
        "&:last-child": {
          paddingRight: 5
        }
      }
    }
  }
});

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '100%',
  }
}));

function Leave(props) {
  const classes = useStyles();
  const [view, setView] = useState([]);
  const user = getUser();

  const [type, setType] = useState("");
  const [from, setFromDate] = useState("");
  const [to, setToDate] = useState("");
  const [reason, setReason] = useState("Personal Work");
  const [token, setToken] = useState("");

  var date1 = new Date(from);
  var date2 = new Date(to);
  const one_day = 1000 * 60 * 60 * 24;

  // To calculate the time difference of two dates
  var Difference_In_Time = date2.getTime() - date1.getTime() + one_day;

  // To calculate the no. of days between two dates
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

  const days = Difference_In_Days;

  const contractor = user[0].contractor;

  const [emptoken, setEmpToken] = useState("");
  const [applieddate, setAppliedDate] = useState("");

  const applyLeave = (event) => {
    if (user[0].role === 'employee') {
      const token = user[0].token;
      event.preventDefault();
      axios.post("http://localhost:3000/leave/applyLeave", {
        type: type,
        from: from,
        to: to,
        days: days,
        reason: reason,
        token: token,
        contractor: contractor
      })
      window.location.reload();
    } else {
      event.preventDefault();
      axios.post("http://localhost:3000/leave/applyLeave", {
        type: type,
        from: from,
        to: to,
        days: days,
        reason: reason,
        token: token,
        contractor: contractor
      })
      window.location.reload();
    }
  };

  useEffect(() => {
    const user = getUser();

    if (user[0].role === 'employee') {
      const token = user[0].token;
      axios.post('http://localhost:3000/leave/leaveAppliedByEmp', {
        token: token
      }).then((response) => {
        setView(response.data);
      });
    } else if (user[0].role === 'contractor') {
      const contractor = user[0].contractor;
      axios.post('http://localhost:3000/leave/leaveAppliedByContractor', {
        contractor: contractor
      }).then((response) => {
        setView(response.data);
      });
    } else if (user[0].role === 'hod') {
      const dept = user[0].dept;
      console.log(dept);
      axios.post('http://localhost:3000/leave/leaveAppliedByHod', {
        dept: dept
      }).then((response) => {
        setView(response.data);
      });
    } else {
      axios.get('http://localhost:3000/leave/leaveAppliedAll')
        .then((response) => {
          setView(response.data);
        });
    }
  }, []);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const ApproveLeave = () => {
    axios.post('http://localhost:3000/leave/approveLeave', {
      token: emptoken,
      applieddate: applieddate,
      from: from,
      to: to,
      status: 'Approved'
    })
    window.location.reload();
  };

  const RejectLeave = () => {
    axios.post('http://localhost:3000/leave/approveLeave', {
      token: emptoken,
      applieddate: applieddate,
      from: from,
      to: to,
      status: 'Rejected'
    })
    window.location.reload();
  };

  return (
    <>
      <PageTitle title="Leave Management" />
      {(() => {
        if (user[0].role === 'employee') {
          return (
            <>
              <h2>Apply Leave</h2>
              <form onSubmit={applyLeave}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={3}>
                    <FormControl required className={classes.formControl}>
                      <InputLabel htmlFor="age-native-required" required className={classes.formControl}>Type</InputLabel>
                      <Select
                        native
                        onChange={(event) => { setType(event.target.value); }}
                        style={{ width: '100%' }}
                      >
                        <option aria-label="None" value="" />
                        <option value="CL">CL (Casual)</option>
                        <option value="LWP">LWP</option>
                        <option value="TOUR">TOUR</option>
                        <option value="OD">OD</option>
                        <option value="ESI">ESI</option>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <TextField
                      required
                      id="from"
                      name="from"
                      type="date"
                      label="From Date"
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onChange={(event) => { setFromDate(event.target.value); }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <TextField
                      required
                      id="to"
                      name="to"
                      type="date"
                      label="To Date"
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onChange={(event) => { setToDate(event.target.value); }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <TextField
                      disabled
                      id="days"
                      name="days"
                      type="text"
                      label="Days"
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                      }}
                      value={days}
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <FormLabel component="legend" required>Reason</FormLabel>
                    <RadioGroup row aria-label="reason" name="reason" defaultValue="Personal Work" onChange={(event) => { setReason(event.target.value); }}>
                      <FormControlLabel value="Personal Work" control={<Radio color="primary" />} label="Personal Work" />
                      <FormControlLabel value="Domestic Work" control={<Radio color="primary" />} label="Domestic Work" />
                      <FormControlLabel value="Not Feeling Well" control={<Radio color="primary" />} label="Not Feeling Well" />
                      <FormControlLabel value="Other" control={<Radio color="primary" />} label="Other" />
                    </RadioGroup>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                      <Button
                        type="submit"
                        style={{
                          fontSize: "18px",
                        }}
                        color="primary"
                        variant="contained"
                      >
                        Apply
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </form>
              <br></br>
              <br></br>
              <MuiThemeProvider theme={theme}>
                <MaterialTable
                  title="Previous Applied Leaves"
                  columns={[
                    { title: 'Token No.', field: 'token' },
                    { title: 'Name', field: 'name' },
                    { title: 'Type', field: 'type', width: "40%" },
                    { title: 'From Date', field: 'fromdate' },
                    { title: 'To Date', field: 'todate' },
                    { title: 'Days', field: 'days' },
                    { title: 'Reason', field: 'reason' },
                    { title: 'Applied Date', field: 'applieddate' },
                    { title: 'Status', field: 'status' }
                  ]}
                  fontSize='12px'
                  data={view}
                  options={{
                    pageSize: 10,
                    exportAllData: true,
                    exportButton: true,
                    selection: false,
                    sorting: false,
                    headerStyle: {
                      backgroundColor: '#262626',
                      color: '#FFF',
                      fontSize: '14px',
                      padding: '15px',
                      paddingLeft: '15px',
                      zIndex: '1'
                    },
                    rowStyle: {
                      fontSize: 14,
                      backgroundColor: '#f3f3f3',
                      paging: 'none'
                    },
                    actionsColumnIndex: -1
                  }}
                />
              </MuiThemeProvider>
            </>
          )
        } else if (user[0].role === 'contractor') {
          return (
            <>
              <h2>Apply Leave</h2>
              <form onSubmit={applyLeave}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={3}>
                    <TextField
                      required
                      id="token"
                      name="token"
                      type="text"
                      label="Token No."
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onChange={(event) => { setToken(event.target.value); }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <FormControl required className={classes.formControl}>
                      <InputLabel htmlFor="age-native-required" required className={classes.formControl}>Type</InputLabel>
                      <Select
                        native
                        onChange={(event) => { setType(event.target.value); }}
                        style={{ width: '100%' }}
                      >
                        <option aria-label="None" value="" />
                        <option value="CL">CL (Casual)</option>
                        <option value="LWP">LWP</option>
                        <option value="TOUR">TOUR</option>
                        <option value="OD">OD</option>
                        <option value="ESI">ESI</option>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <TextField
                      required
                      id="from"
                      name="from"
                      type="date"
                      label="From Date"
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onChange={(event) => { setFromDate(event.target.value); }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <TextField
                      required
                      id="to"
                      name="to"
                      type="date"
                      label="To Date"
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onChange={(event) => { setToDate(event.target.value); }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <TextField
                      disabled
                      id="days"
                      name="days"
                      type="text"
                      label="Days"
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                      }}
                      value={days}
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <FormLabel component="legend">Reason</FormLabel>
                    <RadioGroup row aria-label="reason" name="reason" defaultValue="Personal Work" onChange={(event) => { setReason(event.target.value); }}>
                      <FormControlLabel value="Personal Work" control={<Radio color="primary" />} label="Personal Work" />
                      <FormControlLabel value="Domestic Work" control={<Radio color="primary" />} label="Domestic Work" />
                      <FormControlLabel value="Not Feeling Well" control={<Radio color="primary" />} label="Not Feeling Well" />
                      <FormControlLabel value="Other" control={<Radio color="primary" />} label="Other" />
                    </RadioGroup>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                      <Button
                        type="submit"
                        style={{
                          fontSize: "18px",
                        }}
                        color="primary"
                        variant="contained"
                      >
                        Apply
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </form>
              <br></br>
              <br></br>
              <MuiThemeProvider theme={theme}>
                <MaterialTable
                  title="Previous Applied Leaves"
                  columns={[
                    { title: 'Token No.', field: 'token' },
                    { title: 'Name', field: 'name' },
                    { title: 'Type', field: 'type', width: "40%" },
                    { title: 'From Date', field: 'fromdate' },
                    { title: 'To Date', field: 'todate' },
                    { title: 'Days', field: 'days' },
                    { title: 'Reason', field: 'reason' },
                    { title: 'Applied Date', field: 'applieddate' },
                    { title: 'Status', field: 'status' }
                  ]}
                  fontSize='12px'
                  data={view}
                  options={{
                    pageSize: 10,
                    exportAllData: true,
                    exportButton: true,
                    selection: false,
                    sorting: false,
                    headerStyle: {
                      backgroundColor: '#262626',
                      color: '#FFF',
                      fontSize: '14px',
                      padding: '15px',
                      paddingLeft: '15px',
                      zIndex: '1'
                    },
                    rowStyle: {
                      fontSize: 14,
                      backgroundColor: '#f3f3f3',
                      paging: 'none'
                    },
                    actionsColumnIndex: -1
                  }}
                />
              </MuiThemeProvider>
            </>
          )
        } else if (user[0].role === 'hod') {
          return (
            <MuiThemeProvider theme={theme}>
              <MaterialTable
                title="Employee Leaves"
                columns={[
                  { title: 'Token No.', field: 'token' },
                  { title: 'Name', field: 'name' },
                  { title: 'Contractor', field: 'contractor' },
                  { title: 'Type', field: 'type' },
                  { title: 'From Date', field: 'fromdate' },
                  { title: 'To Date', field: 'todate' },
                  { title: 'Days', field: 'days' },
                  { title: 'Reason', field: 'reason' },
                  { title: 'Applied Date', field: 'applieddate' }
                ]}
                fontSize='12px'
                data={view}
                actions={[
                  {
                    tooltip: 'Approve Leave',
                    onClick: (event, rowData) => {
                      handleClickOpen();
                      setEmpToken(rowData.token);
                      setAppliedDate(rowData.applieddate);
                      setFromDate(rowData.fromdate);
                      setToDate(rowData.todate);
                    }
                  }
                ]}
                components={{
                  Action: props => {
                    if (props.data.status === 'Pending') {
                      return (
                        <Button
                          onClick={(event) => props.action.onClick(event, props.data)}
                          color="primary"
                          variant="contained"
                          style={{ textTransform: 'none' }}
                          size="small"
                        >
                          Approve
                        </Button>
                      )
                    } else {
                      return (
                        props.data.status
                      )
                    }
                  },
                }}
                options={{
                  pageSize: 20,
                  exportAllData: true,
                  exportButton: true,
                  selection: false,
                  sorting: false,
                  headerStyle: {
                    backgroundColor: '#262626',
                    color: '#FFF',
                    fontSize: '14px',
                    padding: '15px',
                    paddingLeft: '15px',
                    zIndex: '1'
                  },
                  rowStyle: {
                    fontSize: 14,
                    backgroundColor: '#f3f3f3',
                    paging: 'none'
                  },
                  actionsColumnIndex: -1
                }}
              />
            </MuiThemeProvider>
          )
        }
        else {
          return (
            <MuiThemeProvider theme={theme}>
              <MaterialTable
                title="Employee Leaves"
                columns={[
                  { title: 'Token No.', field: 'token' },
                  { title: 'Name', field: 'name' },
                  { title: 'Contractor', field: 'contractor' },
                  { title: 'Type', field: 'type', width: "40%" },
                  { title: 'From Date', field: 'fromdate' },
                  { title: 'To Date', field: 'todate' },
                  { title: 'Days', field: 'days' },
                  { title: 'Reason', field: 'reason' },
                  { title: 'Applied Date', field: 'applieddate' },
                  { title: 'Status', field: 'status' }
                ]}
                fontSize='12px'
                data={view}
                options={{
                  pageSize: 20,
                  exportAllData: true,
                  exportButton: true,
                  selection: false,
                  sorting: false,
                  headerStyle: {
                    backgroundColor: '#262626',
                    color: '#FFF',
                    fontSize: '14px',
                    padding: '15px',
                    paddingLeft: '15px',
                    zIndex: '1'
                  },
                  rowStyle: {
                    fontSize: 14,
                    backgroundColor: '#f3f3f3',
                    paging: 'none'
                  },
                  actionsColumnIndex: -1
                }}
              />
            </MuiThemeProvider>
          )
        }
      })()}
      <div>
        <Dialog open={open} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Approve or Reject Leave</DialogTitle>
          <DialogActions>
            <Button onClick={ApproveLeave} color="primary">
              Approve
            </Button>
            <Button onClick={RejectLeave} color="secondary">
              Reject
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}
export default Leave;