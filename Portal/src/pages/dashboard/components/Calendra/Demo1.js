import * as React from "react";
import Paper from "@mui/material/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import axios from "axios";
import { Button, Box } from "@material-ui/core";

import {
  Scheduler,
  WeekView,
  Toolbar,
  DateNavigator,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";

import { useState } from "react";
import { useEffect } from "react";

function Demo1() {
  const currentDate = new Date();
  const locale = "en-US";
  const [apiData, setApiData] = useState([]);
  const [displayConfHall, setDisplayConfHall] = useState([]);
  // const [currentDate, setCurrentDate] = useState("2022-11-29");
  // const [locale, setLocale] = useState("en-US");
  useEffect(() => {
    axios.get("http://localhost:3000/con/getDailyData").then((response) => {
      setApiData(response.data.data);
    });
  }, []);

  let schedulerDataNew = [];

  apiData.map((data) => {
    let data1 = {};
    let startDate = new Date(
      new Date(data.meetdate).getFullYear(),
      new Date(data.meetdate).getMonth(),
      data.meetdate.slice(-2),
      data.fromtime.split(":")[0],
      data.fromtime.split(":")[1],
    );
    let endDate = new Date(
      new Date(data.meetdate).getFullYear(),
      new Date(data.meetdate).getMonth(),
      data.meetdate.slice(-2),
      data.totime.split(":")[0],
      data.totime.split(":")[1],
    );
    data1.startDate = startDate;
    data1.endDate = endDate;
    data1.title = data["meettitle"];
    data1.id = data["_id"];
    data1.location = data.confhall;
    schedulerDataNew.push(data1);
  });
  return (
    <div>
      <h1>Conference Hall</h1>
      <Box sx={{ "& button": { m: 1 } }}>
        <div>
          <Button
            style={{ marginRight: "30px" }}
            variant="contained"
            color="primary"
            onClick={setDisplayConfHall("Conference_Hall_1")}
          >
            Conference Hall
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={setDisplayConfHall("Conference_Hall_2")}
          >
            Learning Hall
          </Button>
        </div>
      </Box>
      <br />
      <Paper>
        <Scheduler
          data={schedulerDataNew.filter(function (el) {
            return el.location === displayConfHall;
          })}
          locale={locale}
          height={660}
        >
          <ViewState defaultCurrentDate={currentDate} />

          <WeekView startDayHour={9} endDayHour={20} />

          <Toolbar />
          <DateNavigator />
          <Appointments />
        </Scheduler>
      </Paper>
    </div>
  );
}

export default Demo1;
