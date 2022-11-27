import * as React from "react";
// import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
// import TextField from "@mui/material/TextField";
// import MenuItem from "@mui/material/MenuItem";
import { ViewState } from "@devexpress/dx-react-scheduler";
// import { Button } from "@material-ui/core";
import axios from "axios";

import {
  Scheduler,
  WeekView,
  Toolbar,
  DateNavigator,
  Appointments,
  // AllDayPanel,
} from "@devexpress/dx-react-scheduler-material-ui";

import { appointments } from "./DemoData";

// const PREFIX = "Demo";

// const classes = {
//   container: `${PREFIX}-container`,
//   text: `${PREFIX}-text`,
// };

// const StyledDiv = styled("div")(({ theme }) => ({
//   [`&.${classes.container}`]: {
//     display: "flex",
//     marginBottom: theme.spacing(2),
//     justifyContent: "flex-end",
//   },
//   [`& .${classes.text}`]: {
//     ...theme.typography.h6,
//     marginRight: theme.spacing(2),
//   },
// }));

// const allDayLocalizationMessages = {
//   "en-US": {
//     allDay: "All Day",
//   },
// };

// const getAllDayMessages = (locale) => allDayLocalizationMessages[locale];

// const LocaleSwitcher = ({ onLocaleChange, currentLocale }) => (
//   <StyledDiv className={classes.container}>
//     <div className={classes.text}>Locale:</div>
//     <TextField
//       select
//       variant="standard"
//       value={currentLocale}
//       onChange={onLocaleChange}
//     >
//       <MenuItem value="en-US">English (United States)</MenuItem>
//     </TextField>
//   </StyledDiv>
// );
// let globalData = {};
// const displayCalendar = async (id) => {
//   axios.get("http://localhost:3000/con/getDailyData").then((response) => {
//     console.log(response.data);
//   });
// };

export default class Demo1 extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      schedulerData: appointments,
      currentDate: "2022-11-27",
      locale: "en-US",
    };

    //   this.changeLocale = (event) =>
    //     this.setState({ locale: event.target.value });
  }
  componentDidMount() {
    axios.get("http://localhost:3000/con/getDailyData").then((response) => {
      //   console.log(response.data["data"]);
      let dataNew = response.data["data"];
      //   dataNew["title"] = dataNew["meettitle"];
      let schedulerDataNew = [];
      dataNew.map((data) => {
        data.title = data["meettitle"];

        let startDate = new Date(
          data["meetdate"].substring(0, 4),
          data["meetdate"].substring(5, 7),
          data["meetdate"].substring(8, 10),
          data["fromtime"].substring(0, 2),
          data["fromtime"].substring(3, 5),
        );
        let endDate = new Date(
          data["meetdate"].substring(0, 4),
          data["meetdate"].substring(5, 7),
          data["meetdate"].substring(8, 10),
          data["totime"].substring(0, 2),
          data["totime"].substring(3, 5),
        );
        // console.log(startDate);
        data.startDate = startDate;
        data.endDate = endDate;
        data.id = 0;
        data.location = "Kolhapur";
        schedulerDataNew = [...schedulerDataNew, data];
        this.setState({ schedulerData: schedulerDataNew });
      });
    });
  }
  render() {
    const { schedulerData, currentDate, locale } = this.state;
    console.log(schedulerData);
    console.log(appointments);
    return (
      <div>
        {/* <LocaleSwitcher
          currentLocale={locale}
          onLocaleChange={this.changeLocale}
        /> */}
        <Paper>
          <Scheduler data={appointments} locale={locale} height={660}>
            <ViewState defaultCurrentDate={currentDate} />

            <WeekView startDayHour={9} endDayHour={20} />

            <Toolbar />
            <DateNavigator />
            <Appointments />
            {/* <AllDayPanel messages={getAllDayMessages(locale)} /> */}
          </Scheduler>
        </Paper>
      </div>
    );
  }
}
