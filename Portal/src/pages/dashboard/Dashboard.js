import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from "react-google-charts";
import { getUser } from "../../components/Utils/Common";
import {
  Grid,
  LinearProgress,
} from "@material-ui/core";

// styles
import useStyles from "./styles";

// components
import Widget from "../../components/Widget";
import PageTitle from "../../components/PageTitle";
import { Typography } from "../../components/Wrappers";
import Dot from "../../components/Sidebar/components/Dot";

export default function Dashboard(props) {
  var classes = useStyles();
  const user = getUser();
  var data = user[0].role;
  var date = new Date();
  // var time = date.toLocaleTimeString("en-US", { timeZone: 'Asia/Kolkata' });
  var hour = date.getHours();

  var getShift;

  if (hour >= 8 && hour <= 15) { getShift = "Shift I"; } else if (hour >= 16 && hour <= 23) { getShift = "Shift II"; }
  else { getShift = "Shift III"; }

  const shift = getShift;

  const [shell_core, set_shell_core] = useState('');
  const [cold_box, set_cold_box] = useState('');
  const [arpa_900, set_arpa_900] = useState('');
  const [arpa_450, set_arpa_450] = useState('');
  const [w_b_q_3, set_w_b_q_3] = useState('');
  const [hand_moulding, set_hand_moulding] = useState('');
  const [melting, set_melting] = useState('');
  const [fettling, set_fettling] = useState('');
  const [isLoading, setLoading] = useState(true);

  const [reqs_shell_core, req_shell_core] = useState('');
  const [reqs_cold_box, req_cold_box] = useState('');
  const [reqs_arpa_900, req_arpa_900] = useState('');
  const [reqs_arpa_450, req_arpa_450] = useState('');
  const [reqs_w_b_q_3, req_w_b_q_3] = useState('');
  const [reqs_hand_moulding, req_hand_moulding] = useState('');
  const [reqs_melting, req_melting] = useState('');
  const [reqs_fettling, req_fettling] = useState('');

  // useEffect(() => {
  //   axios.get('http://localhost:3000/req/shell_core').then((response) => { req_shell_core(response.data[0].requirement); });
  //   axios.get('http://localhost:3000/req/cold_box').then((response) => { req_cold_box(response.data[0].requirement); });
  //   axios.get('http://localhost:3000/req/arpa_900').then((response) => { req_arpa_900(response.data[0].requirement); });
  //   axios.get('http://localhost:3000/req/arpa_450').then((response) => { req_arpa_450(response.data[0].requirement); });
  //   axios.get('http://localhost:3000/req/w_b_q_3').then((response) => { req_w_b_q_3(response.data[0].requirement); });
  //   axios.get('http://localhost:3000/req/hand_moulding').then((response) => { req_hand_moulding(response.data[0].requirement); });
  //   axios.get('http://localhost:3000/req/melting').then((response) => { req_melting(response.data[0].requirement); });
  //   axios.get('http://localhost:3000/req/fettling').then((response) => { req_fettling(response.data[0].requirement); });

  //   axios.post('http://localhost:3000/mp/getAllocationData_shell_core', { verified: 'YES', shift: shift }).then((response) => { set_shell_core(response.data[0].count); });
  //   axios.post('http://localhost:3000/mp/getAllocationData_cold_box', { verified: 'YES', shift: shift }).then((response) => { set_cold_box(response.data[0].count); });
  //   axios.post('http://localhost:3000/mp/getAllocationData_arpa_900', { verified: 'YES', shift: shift }).then((response) => { set_arpa_900(response.data[0].count); });
  //   axios.post('http://localhost:3000/mp/getAllocationData_arpa_450', { verified: 'YES', shift: shift }).then((response) => { set_arpa_450(response.data[0].count); });
  //   axios.post('http://localhost:3000/mp/getAllocationData_w_b_q_3', { verified: 'YES', shift: shift }).then((response) => { set_w_b_q_3(response.data[0].count); });
  //   axios.post('http://localhost:3000/mp/getAllocationData_hand_moulding', { verified: 'YES', shift: shift }).then((response) => { set_hand_moulding(response.data[0].count); });
  //   axios.post('http://localhost:3000/mp/getAllocationData_melting', { verified: 'YES', shift: shift }).then((response) => { set_melting(response.data[0].count); });
  //   axios.post('http://localhost:3000/mp/getAllocationData_fettling', { verified: 'YES', shift: shift }).then((response) => { set_fettling(response.data[0].count); setLoading(false); });
  // }, [shift]);

  var requirements = parseInt(reqs_shell_core) + parseInt(reqs_cold_box) + parseInt(reqs_arpa_900) + parseInt(reqs_arpa_450) + parseInt(reqs_w_b_q_3) + parseInt(reqs_hand_moulding) + parseInt(reqs_melting) + parseInt(reqs_fettling);
  var availability = parseInt(shell_core) + parseInt(cold_box) + parseInt(arpa_900) + parseInt(arpa_450) + parseInt(w_b_q_3) + parseInt(hand_moulding) + parseInt(melting) + parseInt(fettling);
  var diff_shell_core = reqs_shell_core - shell_core;
  var diff_cold_box = reqs_cold_box - cold_box;
  var diff_arpa_900 = reqs_arpa_900 - arpa_900;
  var diff_arpa_450 = reqs_arpa_450 - arpa_450;
  var diff_w_b_q_3 = reqs_w_b_q_3 - w_b_q_3;
  var diff_hand_moulding = reqs_hand_moulding - hand_moulding;
  var diff_melting = reqs_melting - melting;
  var diff_fettling = reqs_fettling - fettling;
  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <>
      <PageTitle title="Dashboard" />
      <div>
        {(() => {
          if (data === 'hr') {
            return (
              <Grid container spacing={4}>
                <Grid item lg={4} md={8} sm={6} xs={12}>
                  <Widget
                    title='Conference Management'
                    upperTitle
                    className={classes.card}
                    bodyClass={classes.fullHeightBody}
                  >
                    <div className={classes.legendElement}>
                      <Typography
                        color="text"
                        colorBrightness="secondary"
                        size="md"
                      >
                        {shift}
                      </Typography>
                    </div>
                    <div className={classes.performanceLegendWrapper}>
                      <div className={classes.legendElement}>
                        <Dot color="primary" />
                        <Typography
                          color="text"
                          colorBrightness="secondary"
                          className={classes.legendElementText}
                        >
                          Requirement
                        </Typography>
                      </div>
                      <div className={classes.legendElement}>
                        <Dot color="warning" />
                        <Typography
                          color="text"
                          colorBrightness="secondary"
                          className={classes.legendElementText}
                        >
                          Availability
                        </Typography>
                      </div>
                    </div>
                    <div className={classes.progressSection}>
                      <Typography
                        size="md"
                        color="text"
                        colorBrightness="secondary"
                        className={classes.progressSectionTitle}
                      >
                        Requirement ({requirements})
                      </Typography>
                      <LinearProgress
                        variant="determinate"
                        value={100}
                        classes={{ barColorPrimary: classes.progressBarPrimary }}
                        className={classes.progress}
                      />
                    </div>
                    <br></br>
                    <div>
                      <Typography
                        size="md"
                        color="text"
                        colorBrightness="secondary"
                        className={classes.progressSectionTitle}
                      >
                        Availability ({availability})
                      </Typography>
                      <LinearProgress
                        variant="determinate"
                        value={availability / 2}
                        classes={{ barColorPrimary: classes.progressBarWarning }}
                        className={classes.progress}
                      />
                    </div>
                  </Widget>
                </Grid>
                <Grid item lg={4} md={8} sm={6} xs={12}>
                  <Widget
                    title="Confernece Mangement"
                    upperTitle
                    className={classes.card}
                    bodyClass={classes.fullHeightBody}
                  >
                    <Chart
                      width={'90%'}
                      height="188px"
                      chartType="PieChart"
                      loader={<div>Loading Chart</div>}
                      data={[
                        ['Task', 'Hours per Day'],
                        ['Shell Core', diff_shell_core],
                        ['Cold Box', diff_cold_box],
                        ['Arpa 900', diff_arpa_900],
                        ['Arpa 450', diff_arpa_450],
                        ['W.B.Q.3', diff_w_b_q_3],
                        ['Hand Moulding', diff_hand_moulding],
                        ['Melting', diff_melting],
                        ['Fettling', diff_fettling],
                      ]}
                      options={{
                        is3D: true,
                      }}
                    />
                  </Widget>
                </Grid>
              </Grid >
            )
          }else if (data === 'hod') {
            return (
              <Grid container spacing={4}>
                <Grid item lg={4} md={8} sm={6} xs={12}>
                  <Widget
                    title='Manpower Performance'
                    upperTitle
                    className={classes.card}
                    bodyClass={classes.fullHeightBody}
                  >
                    <div className={classes.legendElement}>
                      <Typography
                        color="text"
                        colorBrightness="secondary"
                        size="md"
                      >
                        {shift}
                      </Typography>
                    </div>
                    <div className={classes.performanceLegendWrapper}>
                      <div className={classes.legendElement}>
                        <Dot color="primary" />
                        <Typography
                          color="text"
                          colorBrightness="secondary"
                          className={classes.legendElementText}
                        >
                          Requirement
                        </Typography>
                      </div>
                      <div className={classes.legendElement}>
                        <Dot color="warning" />
                        <Typography
                          color="text"
                          colorBrightness="secondary"
                          className={classes.legendElementText}
                        >
                          Availability
                        </Typography>
                      </div>
                    </div>
                    <div className={classes.progressSection}>
                      <Typography
                        size="md"
                        color="text"
                        colorBrightness="secondary"
                        className={classes.progressSectionTitle}
                      >
                        Requirement ({requirements})
                      </Typography>
                      <LinearProgress
                        variant="determinate"
                        value={100}
                        classes={{ barColorPrimary: classes.progressBarPrimary }}
                        className={classes.progress}
                      />
                    </div>
                    <br></br>
                    <div>
                      <Typography
                        size="md"
                        color="text"
                        colorBrightness="secondary"
                        className={classes.progressSectionTitle}
                      >
                        Availability ({availability})
                      </Typography>
                      <LinearProgress
                        variant="determinate"
                        value={availability / 2}
                        classes={{ barColorPrimary: classes.progressBarWarning }}
                        className={classes.progress}
                      />
                    </div>
                  </Widget>
                </Grid>
                <Grid item lg={4} md={8} sm={6} xs={12}>
                  <Widget
                    title="Manpower Diffrence"
                    upperTitle
                    className={classes.card}
                    bodyClass={classes.fullHeightBody}
                  >
                    <Chart
                      width={'90%'}
                      height="188px"
                      chartType="PieChart"
                      loader={<div>Loading Chart</div>}
                      data={[
                        ['Task', 'Hours per Day'],
                        ['Shell Core', diff_shell_core],
                        ['Cold Box', diff_cold_box],
                        ['Arpa 900', diff_arpa_900],
                        ['Arpa 450', diff_arpa_450],
                        ['W.B.Q.3', diff_w_b_q_3],
                        ['Hand Moulding', diff_hand_moulding],
                        ['Melting', diff_melting],
                        ['Fettling', diff_fettling],
                      ]}
                      options={{
                        is3D: true,
                      }}
                    />
                  </Widget>
                </Grid>
              </Grid >
            )
          }else if (data === 'employee') {
            return (
              <Grid container spacing={4}>
                <Grid item lg={4} md={8} sm={6} xs={12}>
                  <Widget
                    title='Conference Management'
                    upperTitle
                    className={classes.card}
                    bodyClass={classes.fullHeightBody}
                  >
                    <div className={classes.legendElement}>
                      <Typography
                        color="text"
                        colorBrightness="secondary"
                        size="md"
                      >
                        {shift}
                      </Typography>
                    </div>
                    <div className={classes.performanceLegendWrapper}>
                      <div className={classes.legendElement}>
                        <Dot color="primary" />
                        <Typography
                          color="text"
                          colorBrightness="secondary"
                          className={classes.legendElementText}
                        >
                          Requirement
                        </Typography>
                      </div>
                      <div className={classes.legendElement}>
                        <Dot color="warning" />
                        <Typography
                          color="text"
                          colorBrightness="secondary"
                          className={classes.legendElementText}
                        >
                          Availability
                        </Typography>
                      </div>
                    </div>
                    <div className={classes.progressSection}>
                      <Typography
                        size="md"
                        color="text"
                        colorBrightness="secondary"
                        className={classes.progressSectionTitle}
                      >
                        Requirement ({requirements})
                      </Typography>
                      <LinearProgress
                        variant="determinate"
                        value={100}
                        classes={{ barColorPrimary: classes.progressBarPrimary }}
                        className={classes.progress}
                      />
                    </div>
                    <br></br>
                    <div>
                      <Typography
                        size="md"
                        color="text"
                        colorBrightness="secondary"
                        className={classes.progressSectionTitle}
                      >
                        Availability ({availability})
                      </Typography>
                      <LinearProgress
                        variant="determinate"
                        value={availability / 2}
                        classes={{ barColorPrimary: classes.progressBarWarning }}
                        className={classes.progress}
                      />
                    </div>
                  </Widget>
                </Grid>
                <Grid item lg={4} md={8} sm={6} xs={12}>
                  <Widget
                    title="Confernece Mangement"
                    upperTitle
                    className={classes.card}
                    bodyClass={classes.fullHeightBody}
                  >
                    <Chart
                      width={'90%'}
                      height="188px"
                      chartType="PieChart"
                      loader={<div>Loading Chart</div>}
                      data={[
                        ['Task', 'Hours per Day'],
                        ['Shell Core', diff_shell_core],
                        ['Cold Box', diff_cold_box],
                        ['Arpa 900', diff_arpa_900],
                        ['Arpa 450', diff_arpa_450],
                        ['W.B.Q.3', diff_w_b_q_3],
                        ['Hand Moulding', diff_hand_moulding],
                        ['Melting', diff_melting],
                        ['Fettling', diff_fettling],
                      ]}
                      options={{
                        is3D: true,
                      }}
                    />
                  </Widget>
                </Grid>
              </Grid >
            )
          }
          else {
            return (
              <h2>Welcome "{user[0].name}" Have Nice Day..!</h2>
            )
          }
        })()}
      </div>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}