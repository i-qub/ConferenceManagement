import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import PageTitle from "../../components/PageTitle/PageTitle";
import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";
import axios from 'axios';
import { getUser } from '../../components/Utils/Common';

const theme = createTheme({
  overrides: {
    MuiTableCell: {
      root: {
        paddingTop: 6,
        paddingBottom: 6,
        "&:last-child": {
          paddingRight: 5
        }
      }
    }
  }
});

function Verification() {
  const [view, setView] = useState([]);

  useEffect(() => {
    const user = getUser();
    const contractor = user[0].contractor;
    const dept = 'W.B.Q.3 LINE';
    axios.post('http://localhost:1020/viewPendingVerify', {
      contractor: contractor,
      dept: dept
    }).then((response) => {
      setView(response.data);
    });
  }, []);
  return (
    <>
      <PageTitle title="Pending Verification List" />
      <MuiThemeProvider theme={theme}>
        <MaterialTable
          title="Pending Verification List"
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
          options={{
            pageSize: 20,
            exportAllData: true,
            exportButton: true,
            selection: false,
            sorting: false,
            headerStyle: {
              backgroundColor: '#262626',
              color: '#FFF',
              fontSize: '14px',
              padding: '10px',
              paddingLeft: '15px'
            },
            rowStyle: {
              fontSize: 14,
              backgroundColor: '#f3f3f3',
              paging: 'none'
            }
          }}
        />
      </MuiThemeProvider>
      <br></br>
      <br></br>
      <br></br>
    </>
  )
}

export default Verification;