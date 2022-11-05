import React from "react";
import { Grid, Button } from "@material-ui/core";
import { Link } from 'react-router-dom';

// components
import PageTitle from "../../../components/PageTitle/PageTitle";

export default function Absent() {
  return (
    <>
      <PageTitle title="Absent Report" />
      <Grid container spacing={3} style={{ padding: "1rem" }}>
        <Grid item lg={3} md={3} sm={6} xs={12}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth="100%"
            style={{ padding: "2rem", fontSize: "1rem" }}
            component={Link} to="/manpower/expected"
          >
            Shell Core
          </Button>
        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={12}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth="100%"
            style={{ padding: "2rem", fontSize: "1rem" }}
            component={Link} to="/manpower/actual"
          >
            Cold Box
          </Button>
        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={12}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth="100%"
            style={{ padding: "2rem", fontSize: "1rem" }}
            component={Link} to="/manpower/absent"
          >
            Arpa 900
          </Button>
        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={12}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth="100%"
            style={{ padding: "2rem", fontSize: "1rem" }}
            component={Link} to="/manpower/absent"
          >
            Arpa 450
          </Button>
        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={12}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth="100%"
            style={{ padding: "2rem", fontSize: "1rem" }}
            component={Link} to="/manpower/absent"
          >
            W.B.Q.3
          </Button>
        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={12}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth="100%"
            style={{ padding: "2rem", fontSize: "1rem" }}
            component={Link} to="/manpower/absent"
          >
            Hand Moulding
          </Button>
        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={12}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth="100%"
            style={{ padding: "2rem", fontSize: "1rem" }}
            component={Link} to="/manpower/absent"
          >
            Melting
          </Button>
        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={12}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth="100%"
            style={{ padding: "2rem", fontSize: "1rem" }}
            component={Link} to="/manpower/absent"
          >
            Fettling
          </Button>
        </Grid>
      </Grid>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}