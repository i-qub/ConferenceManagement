import React from "react";

// styles
import useStyles from "./styles";

// components
import { Typography } from "../Wrappers";

export default function PageTitle(props) {
  var classes = useStyles();

  return (
    <div className={classes.pageTitleContainer}>
      <Typography className={classes.typo} size="sm" style={{fontSize: "2rem"}}>
        {props.title}
      </Typography>
      {props.button && props.button}
    </div>
  );
}
