import * as React from "react";
// import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
// import TextField from "@mui/material/TextField";
// import MenuItem from "@mui/material/MenuItem";
import { ViewState } from "@devexpress/dx-react-scheduler";
import { Button } from "@material-ui/core";
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

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: appointments,
      currentDate: "2018-06-27",
      locale: "en-US",
    };

    this.changeLocale = (event) =>
      this.setState({ locale: event.target.value });
  }

  render() {
    const { data, currentDate, locale } = this.state;

    return (
      <div>
        {/* <LocaleSwitcher
          currentLocale={locale}
          onLocaleChange={this.changeLocale}
        /> */}
        <Paper>
          <Scheduler data={data} locale={locale} height={660}>
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
