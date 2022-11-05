import React from 'react';
import { Button, Grid } from "@material-ui/core";
import { Link } from 'react-router-dom';
import PageTitle from "../../components/PageTitle/PageTitle";

function Process() {
  return (
    <>
      <PageTitle title="Process Management" />
      <Grid container spacing={2} style={{ padding: "1rem" }}>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth="100%"
            style={{ padding: "2rem", fontSize: "1rem" }}
            component={Link} to="/process/empskill"
          >
            Skill Management
          </Button>
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth="100%"
            style={{ padding: "2rem", fontSize: "1rem" }}
            component={Link} to="/process/training"
          >
            Training Management
          </Button>
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth="100%"
            style={{ padding: "2rem", fontSize: "1rem" }}
            component={Link} to="/process/processReport"
          >
            Process Report
          </Button>
        </Grid>
      </Grid>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}

export default Process;