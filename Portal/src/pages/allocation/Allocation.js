import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import PageTitle from '../../components/PageTitle/PageTitle';
import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";
import axios from 'axios';
import { Button } from '@material-ui/core';
import ViewDetailsPopup from '../../components/Popup/ViewDetailsPopup';
import ViewDetails from './ViewDetails';
import { getUser } from '../../components/Utils/Common';

const theme = createTheme({
  overrides: {
    MuiTableCell: {
      root: {
        paddingTop: 10,
        paddingBottom: 10,
        "&:last-child": {
          paddingRight: 5
        }
      }
    }
  }
});

function Allocation() {
  const [view, setView] = useState([]);
  const [openDetailsPopup, setOpenDetailsPopup] = useState(false);
  const [token, setToken] = useState("");

  const handleClickOpen = () => {
    setOpenDetailsPopup(true);
  };

  const handleClose = () => {
    setOpenDetailsPopup(false);
  };

  useEffect(() => {
    const user = getUser();
    const dept = user[0].dept;
    axios.post('http://localhost/emp/allocation', {
      dept: dept
    }).then((response) => {
      setView(response.data);
    });
  }, []);
  return (
    <>
      <PageTitle title="Allocation Management" />
      <MuiThemeProvider theme={theme}>
        <MaterialTable
          title="Allocation Management"
          columns={[
            { title: 'Token No.', field: 'token' },
            { title: 'Name', field: 'name', width: "40%" },
            { title: 'Contractor', field: 'contractor' },
            { title: 'Join Date', field: 'joindate' },
            { title: 'End Date', field: 'enddate' },
            { title: 'Mobile No.', field: 'mobile1' },
            { title: 'Department', field: 'dept' }
          ]}
          fontSize='12px'
          data={view}
          actions={[
            {
              tooltip: 'Verify Employee',
              onClick: (event, rowData) => {
                handleClickOpen();
                setToken(rowData.token)
              }
            }
          ]}
          components={{
            Action: props => (
              <Button
                onClick={(event) => props.action.onClick(event, props.data)}
                color="primary"
                variant="contained"
                style={{ textTransform: 'none' }}
                size="small"
              >
                Allocation
              </Button>
            ),
          }}
          options={{
            pageSize: 10,
            exportAllData: true,
            exportButton: true,
            selection: false,
            sorting: false,
            headerStyle: {
              backgroundColor: '#262626',
              color: '#FFF',
              fontSize: '14px',
              padding: '10px',
              paddingLeft: '15px',
              zIndex: '1'
            },
            rowStyle: {
              fontSize: 14,
              backgroundColor: '#f3f3f3',
              paging: 'none'
            },
            actionsColumnIndex: -1
          }}
        />
      </MuiThemeProvider>
      <ViewDetailsPopup
        openDetailsPopup={openDetailsPopup}
        token={token}
        onClose={handleClose}
      >
        <ViewDetails
          onSubmitClose={handleClose}
          token={token}
        />
      </ViewDetailsPopup>
      <br></br>
      <br></br>
      <br></br>
    </>
  )
}

export default Allocation;