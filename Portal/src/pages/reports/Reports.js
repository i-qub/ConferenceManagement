import React from "react";
import { Grid, Button } from "@material-ui/core";
import { Link } from 'react-router-dom';

// components
import PageTitle from "../../components/PageTitle/PageTitle";

export default function Reports() {

  return (
    <>
      <PageTitle title="View Reports" />
      <Grid container spacing={4} style={{ padding: "1rem" }}>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth="100%"
            style={{ padding: "2rem", fontSize: "1rem" }}
            component={Link} to="/reports/mpreport"
          >
            Manpower Report
          </Button>
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth="100%"
            style={{ padding: "2rem", fontSize: "1rem" }}
            component={Link} to="/reports/reqreport"
          >
            Requirements Report
          </Button>
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth="100%"
            style={{ padding: "2rem", fontSize: "1rem" }}
            component={Link} to="/reports/sreport"
          >
            Summary Report
          </Button>
        </Grid>
      </Grid>
    </>
  );
}