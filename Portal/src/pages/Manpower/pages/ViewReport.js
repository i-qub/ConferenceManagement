import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";
import axios from 'axios';

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

function ViewReport(props) {
    const [view, setView] = useState([]);

    useEffect(() => {
        const { token } = props;
        const { startDate } = props;
        const { endDate } = props;
        axios.post('http://localhost:3000/report/manpowerReport', {
            token: token,
            startDate: startDate,
            endDate: endDate
        }).then((response) => {
            setView(response.data);
        });
    }, [props]);

    return (
        <>
            <MuiThemeProvider theme={theme}>
                <MaterialTable
                    title="Manpower Report"
                    columns={[
                        { title: 'Token No.', field: 'token' },
                        { title: 'Name', field: 'name', width: "40%" },
                        { title: 'Punch In', field: 'punchin' },
                        { title: 'Punch Out', field: 'punchout' },
                        { title: 'Verified Time', field: 'verifiedtime' },
                        { title: 'Shift', field: 'shift' },
                        { title: 'Mobile No.', field: 'mobile1' },
                        { title: 'Department', field: 'dept' },
                        { title: 'Sub Dept', field: 'subdept' },
                        { title: 'Location', field: 'location' }
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
                            paddingLeft: '15px',
                            zIndex: '1'
                        },
                        rowStyle: {
                            fontSize: 14,
                            backgroundColor: '#f3f3f3',
                            paging: 'none'
                        },
                    }}
                />
            </MuiThemeProvider>
        </>
    )
}

export default ViewReport;