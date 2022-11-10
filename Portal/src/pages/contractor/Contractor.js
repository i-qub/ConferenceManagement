import React, { useState, useEffect } from "react";
import {
  Button,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import tableIcons from "./Icons";
import ConRegiPopup from "../../components/Popup/ConRegiPopup";
import ConRegistration from "./conregistration/ConRegistration";
import PageTitle from "../../components/PageTitle/PageTitle";
import MaterialTable from "material-table";
import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";
import axios from "axios";
import ViewEmployees from "./ViewEmployees";
import ViewEmployeesPopup from "../../components/Popup/ViewEmployeesPopup";
import EditEmployeesPopup from "../../components/Popup/EditEmployeePopup";
import ContractorEdit from "./conregistration/ContractorEdit";
// import { useHistory } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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

function Contractor() {
  const [openRegiPopup, setOpenRegiPopup] = useState(false);
  const [openEmployeesPopup, setOpenEmployeesPopup] = useState(false);
  const [openEditEmployeesPopup, setOpenEditEmployeePopup] = useState(false);

  const [contractor, setContractor] = useState("");
  const [token, setToken] = useState("");
  // let history = useHistory();
  // let navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleOpenForEdit = () => {
    alert("Hi");
    //openEditEmployeesPopup(true);
    setOpenEditEmployeePopup(true);
  };

  const handleClickClose1 = () => {
    setOpenEditEmployeePopup(false);
  };

  const handleOpen = () => {
    setOpenEmployeesPopup(true);
  };

  const handleClickClose = () => {
    setOpenEmployeesPopup(false);
  };

  const handleClickOpen = () => {
    setOpenRegiPopup(true);
  };

  const handleClose = () => {
    setOpenRegiPopup(false);
  };

  const [view, setView] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/con/viewContractor").then((response) => {
      setView(response.data);
    });
  }, []);

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

  // const editUser = () => {
  //   navigator;
  // };

  const deleteUser = async (id) => {
    await axios.get(`http://localhost:3000/con/deleteMeeting?id=${id}`);
    window.location.reload(true);
    // history.push("/contractor");
    //navigate("/contractor");
  };

  return (
    <>
      <PageTitle title="Conference Hall Management" />
      <Button
        variant="contained"
        size="medium"
        color="primary"
        onClick={handleClickOpen}
      >
        Add Conference
      </Button>
      <br></br>
      <br></br>
      <MuiThemeProvider theme={theme}>
        <MaterialTable
          title="Conference List"
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
            const contractor = rowData.contractor;
            setContractor(contractor);
            handleOpen(true);
          }}
          actions={[
            {
              icon: tableIcons.Delete,
              tooltip: "Delete User",
              onClick: (event, rowData) => {
                deleteUser(rowData._id);

                //     }
                // onClick: () => {

                //   deleteUser();
              },
            },
            {
              icon: tableIcons.Edit,
              tooltip: "Edit User",
              onClick: () => {
                handleOpenForEdit();
                //   <Link to="http://localhost:9001/edit"></Link>; // editUser();
              },
            },
          ]}
          options={{
            pageSize: 10,
            exportAllData: true,
            exportButton: true,
            selection: false,
            sorting: false,
            headerStyle: {
              backgroundColor: "#262626",
              color: "#FFF",
              fontSize: "14px",
              padding: "15px",
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
      <EditEmployeesPopup
        openEditEmployeesPopup={openEditEmployeesPopup}
        contractor={contractor}
        onClose={handleClickClose}
      >
        <ContractorEdit onSubmitClose={handleClose} contractor={contractor} />
      </EditEmployeesPopup>
      <ConRegiPopup openRegiPopup={openRegiPopup} onClose={handleClose}>
        <ConRegistration onSubmitClose={handleClose} />
      </ConRegiPopup>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}

export default Contractor;
