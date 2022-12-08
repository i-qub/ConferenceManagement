import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import tableIcons from "./Icons";
import ConRegiPopup from "../../components/Popup/ConRegiPopup";
import ConRegistration from "./conregistration/ConRegistration";
import PageTitle from "../../components/PageTitle/PageTitle";
import MaterialTable from "material-table";
import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";
import axios from "axios";
import EditEmployeesPopup from "../../components/Popup/EditEmployeesPopup";
import ContractorEdit from "./conregistration/ContractorEdit";
// import { setUserSession } from "../../components/Utils/Common";

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
  const [editData, setEditData] = useState([]);

  const [contractor] = useState("");

  const handleOpenForEdit = async (obj) => {
    setEditData(obj);
    setOpenEmployeesPopup(true);
  };
  // const handleOpen = () => {
  //   setOpenEmployeesPopup(true);
  // };

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

  const deleteUser = async (id) => {
    await axios.get(`http://localhost:3000/con/deleteMeeting?id=${id}`);
    window.location.reload(true);
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
            { title: "Conference Hall", field: "confhall" },
            { title: "Organizer", field: "meetingorganizer" },
            { title: "Email", field: "email" },
            { title: "Mobile No.", field: "mobile1" },
            { title: "Department", field: "dept" },
          ]}
          fontSize="12px"
          data={view} 
          actions={[
            (rowData) => {
              return {
                icon: tableIcons.Delete,
                tooltip: "Delete Meeting",
                disabled:
                  rowData.token !== JSON.parse(sessionStorage.user)[0].token,
                onClick: (event, rowData) => {
                  deleteUser(rowData._id);
                },
              };
            },
            (rowData) => {
              return {
                icon: tableIcons.Edit,
                tooltip: "Edit Meeting",
                disabled:
                  rowData.token !== JSON.parse(sessionStorage.user)[0].token,
                onClick: (e, rowData) => {
                  handleOpenForEdit(rowData);
                 
                },
              };
            },
          ]}
          // actions={[
          //   {
          //     icon: tableIcons.Delete,
          //     tooltip: "Delete User",
          //     disabled:

          //   },
          //   {
          //     icon: tableIcons.Edit,
          //     tooltip: "Edit User",
          //     onClick: (e, rowData) => {
          //       handleOpenForEdit(rowData);
          //     },
          //   },
          // ]}
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
        openEmployeesPopup={openEmployeesPopup}
        contractor={contractor}
        onClose={handleClickClose}
      >
        <ContractorEdit
          onSubmitClose={handleClose}
          contractor={contractor}
          editData={editData}
        />
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
