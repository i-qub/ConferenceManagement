import React, { useState } from 'react';
import { Button, Grid } from "@material-ui/core";
import { Link } from 'react-router-dom';
import PageTitle from "../../components/PageTitle/PageTitle";
import EmpRegiPopup from "../../components/Popup/EmpRegiPopup";
import EmpRegistration from "../../pages/employee/empregistration/EmpRegistration";
import { getUser } from '../../components/Utils/Common';

function Employee() {
  const [openRegiPopup, setOpenRegiPopup] = useState(false);
  const user = getUser();

  const handleClickOpen = () => {
    setOpenRegiPopup(true);
  };

  const handleClose = () => {
    setOpenRegiPopup(false);
  };
  return (
    <>
      <PageTitle title="Employee Management" />
      {(() => {
        if (user[0].role !== 'hod') {
          return (
            <>
              <Button
                variant="contained"
                size="medium"
                color="primary"
                onClick={handleClickOpen}
              >
                New Employee
              </Button>
              <br></br>
              <br></br>
            </>
          )
        }
      })()}
      <Grid container spacing={2} style={{ padding: "1rem" }}>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth="100%"
            style={{ padding: "2rem", fontSize: "1rem" }}
            component={Link} to="/employee/emplist"
          >
            Employee List
          </Button>
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth="100%"
            style={{ padding: "2rem", fontSize: "1rem" }}
            component={Link} to="/employee/leavinglist"
          >
            Leaving Employees
          </Button>
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth="100%"
            style={{ padding: "2rem", fontSize: "1rem" }}
            component={Link} to="/employee/pendinglist"
          >
            Pending Verification
          </Button>
        </Grid>
        {(() => {
          if (user[0].role !== 'hod') {
            return (
              <>
                <Grid item lg={4} md={4} sm={6} xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth="100%"
                    style={{ padding: "2rem", fontSize: "1rem" }}
                    component={Link} to="/employee/pendingallocation"
                  >
                    Pending Allocation
                  </Button>
                </Grid>
                <Grid item lg={4} md={4} sm={6} xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth="100%"
                    style={{ padding: "2rem", fontSize: "1rem" }}
                    component={Link} to="/employee/rejectedlist"
                  >
                    Rejected Verification
                  </Button>
                </Grid>
              </>
            )
          }
        })()}
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth="100%"
            style={{ padding: "2rem", fontSize: "1rem" }}
            component={Link} to="/employee/deactivatedlist"
          >
            Deactivated Employees
          </Button>
        </Grid>
      </Grid>
      <EmpRegiPopup
        openRegiPopup={openRegiPopup}
        onClose={handleClose}
      >
        <EmpRegistration onSubmitClose={handleClose} />
      </EmpRegiPopup>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}

export default Employee;