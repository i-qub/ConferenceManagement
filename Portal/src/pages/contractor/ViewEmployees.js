import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";
import axios from "axios";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import ViewDetailsPopup from "../../components/Popup/ViewDetailsPopup";
import ViewDetails from "../employee/pages/ViewDetails";
import ViewSkillDetailsPopup from "../../components/Popup/ViewSkillDetailsPopup";
import ViewSkillDetails from "../employee/pages/ViewSkillDetails";

const theme = createTheme({
  overrides: {
    MuiTableCell: {
      root: {
        paddingTop: 10,
        paddingBottom: 10,
        "&:last-child": {
          paddingRight: 5,
        },
      },
    },
  },
});

function ViewEmployees(props) {
  const { contractor } = props;
  const [view, setView] = useState([]);

  useEffect(() => {
    const { contractor } = props;
    axios
      .post("http://localhost/emp/viewContractorEmployee", {
        contractor: contractor,
      })
      .then((response) => {
        setView(response.data);
      });
  }, [props]);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  const [openDetailsPopup, setEmployeeDetailsPopup] = useState(false);
  const [openSkillDetailsPopup, setSkillDetailsPopup] = useState(false);
  const [token, setToken] = useState("");
  const [subdept, setSubDept] = useState("");

  const EmployeeDetailsPopup = () => {
    setOpen(false);
    setEmployeeDetailsPopup(true);
  };

  const SkillDetailsPopup = () => {
    setOpen(false);
    setSkillDetailsPopup(true);
  };

  const handleClose = () => {
    setEmployeeDetailsPopup(false);
    setSkillDetailsPopup(false);
  };

  const [deactivationDate, setDeactivationDate] = useState("");
  const [openDeactivation, setOpenDeactivation] = useState(false);

  const handleClickOpenDeactivation = () => {
    setOpenDeactivation(true);
  };

  const handleClickCloseDeactivation = () => {
    setOpenDeactivation(false);
  };

  const deactivate = () => {
    axios.post("http://localhost:3000/emp/deactivateEmp", {
      token: token,
      deactivationDate: deactivationDate,
    });
    window.location.reload();
  };

  return (
    <>
      <MuiThemeProvider theme={theme}>
        <MaterialTable
          title={contractor}
          columns={[
            { title: "Meeting Title", field: "meettitle" },
            { title: "Meeting Date", field: "meetdate", width: "40%" },
            { title: "Start Time", field: "fromtime" },
            { title: "End Time", field: "totime" },
            { title: "Priority", field: "priority" },
            { title: "Conference Hall", field: "confhall" },
            { title: "Total Members", field: "totalmembers" },
            { title: "Organizer", field: "meetingorganizer" },
            { title: "Email", field: "email" },
            { title: "Mobile No.", field: "mobile1" },
          
          
            { title: "Department", field: "dept" },
          ]}
          fontSize="12px"
          data={view}
          onRowClick={(event, rowData) => {
            setToken(rowData.token);
            setSubDept(rowData.subdept);
            handleClickOpen();
          }}
          actions={[
            {
              tooltip: "Deactivate User",
              onClick: (event, rowData) => {
                event.stopPropagation();
                setToken(rowData.token);
                handleClickOpenDeactivation();
              },
            },
          ]}
          components={{
            Action: (props) => (
              <Button
                onClick={(event) => props.action.onClick(event, props.data)}
                color="primary"
                variant="contained"
                style={{ textTransform: "none" }}
                size="small"
              >
                Deactivate
              </Button>
            ),
          }}
          options={{
            pageSize: 20,
            exportAllData: true,
            exportButton: true,
            selection: false,
            sorting: false,
            headerStyle: {
              backgroundColor: "#262626",
              color: "#FFF",
              fontSize: "14px",
              padding: "10px",
              paddingLeft: "15px",
              zIndex: "1",
            },
            rowStyle: {
              fontSize: 14,
              backgroundColor: "#f3f3f3",
              paging: "none",
            },
            actionsColumnIndex: -1,
          }}
        />
      </MuiThemeProvider>
      <div>
        <Dialog open={open} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">
            <div style={{ display: "flex" }}>
              <div
                style={{ flexGrow: 1, fontWeight: "bold", paddingTop: "5px" }}
              >
                View Details
              </div>
              <Button
                style={{
                  fontSize: "16px",
                  minWidth: "8px",
                  maxHeight: "35px",
                }}
                color="secondary"
                variant="contained"
                onClick={handleClickClose}
              >
                <b> X </b>
              </Button>
            </div>
          </DialogTitle>
          <DialogActions>
            <Button onClick={EmployeeDetailsPopup} color="primary">
              Employee Details
            </Button> 
            <Button onClick={SkillDetailsPopup} color="primary">
              Skill Details
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div>
        <Dialog
          open={openDeactivation}
          onClose={handleClickCloseDeactivation}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Select Deactivation Date
          </DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="deactivationDate"
              type="date"
              fullWidth
              onChange={(event) => {
                setDeactivationDate(event.target.value);
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={deactivate} color="primary">
              Deactivate
            </Button>
            <Button onClick={handleClickCloseDeactivation} color="secondary">
              Cancle
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <ViewDetailsPopup
        openDetailsPopup={openDetailsPopup}
        token={token}
        onClose={handleClose}
      >
        <ViewDetails onSubmitClose={handleClose} token={token} />
      </ViewDetailsPopup>
      <ViewSkillDetailsPopup
        openSkillDetailsPopup={openSkillDetailsPopup}
        token={token}
        subdept={subdept}
        onClose={handleClose}
      >
        <ViewSkillDetails
          onSubmitClose={handleClose}
          token={token}
          subdept={subdept}
        />
      </ViewSkillDetailsPopup>
    </>
  );
}

export default ViewEmployees;
