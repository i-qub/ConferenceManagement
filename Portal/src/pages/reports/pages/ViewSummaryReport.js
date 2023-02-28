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

function ViewSummaryReport(props) {
    const [view, setView] = useState([]);
    const { month } = props;
    const { year } = props;

    useEffect(() => {
        const { token } = props;
        const { month } = props;
        const { year } = props;
        axios.post('http://192.168.1.52:3000/report/summaryReport', {
            token: token,
            month: month,
            year: year
        }).then((response) => {
            setView(response.data);
        });
    }, [props]);

    const daysInMonth = new Date(year, month, 0).getDate();

    return (
        <>
            {(() => {
                if (daysInMonth === 28) {
                    return (
                        <MuiThemeProvider theme={theme}>
                            <MaterialTable
                                title="Manpower Report"
                                columns={[
                                    { title: 'Token No.', field: 'token' }, { title: 'Name', field: 'name' }, { title: 'DOJ', field: 'joindate' },
                                    { title: '1', field: '1' }, { title: '2', field: '2' }, { title: '3', field: '3' }, { title: '4', field: '4' },
                                    { title: '5', field: '5' }, { title: '6', field: '6' }, { title: '7', field: '7' }, { title: '8', field: '8' },
                                    { title: '9', field: '9' }, { title: '10', field: '10' }, { title: '11', field: '11' }, { title: '12', field: '12' },
                                    { title: '13', field: '13' }, { title: '14', field: '14' }, { title: '15', field: '15' }, { title: '16', field: '16' },
                                    { title: '17', field: '17' }, { title: '18', field: '18' }, { title: '19', field: '19' }, { title: '20', field: '20' },
                                    { title: '21', field: '21' }, { title: '22', field: '22' }, { title: '23', field: '23' }, { title: '24', field: '24' },
                                    { title: '25', field: '25' }, { title: '26', field: '26' }, { title: '27', field: '27' }, { title: '28', field: '28' },
                                    { title: 'PRDS', field: 'PRDS' }, { title: 'CL', field: 'CL' }, { title: 'LW', field: 'LW' }, { title: 'ESI', field: 'ESI' },
                                    { title: 'AB', field: 'AB' }, { title: 'PH', field: 'PH' }, { title: 'Total', field: 'Total' }, { title: 'Basic', field: 'basic' },
                                    { title: 'Cost', field: 'cost' }, { title: 'Contractor', field: 'contractor' }, { title: 'Dept', field: 'dept' }, { title: 'Category', field: 'type' },
                                    { title: 'Mob No.', field: 'mobile1' }
                                ]}
                                fontSize='12px'
                                data={[{ token: '7289', name: 'Vrushabh Upadhye', joindate: '23/06/2021', 1: 'P', 2: 'A', 3: 'P', 4: 'P', 5: 'P', 6: 'HH', 7: 'P', 8: 'P', 9: 'P', 10: 'P', 11: 'HH', 12: 'P', 13: 'P', 14: 'A', 15: 'P', 16: 'P', 17: 'P', 18: 'P', 19: 'LW', 20: 'HH', 21: 'P', 22: 'P', 23: 'P', 24: 'P', 25: 'P', 26: 'HH', 27: 'PH', 28: 'CL', PRDS: '23', CL: '1', LW: '1', ESI: '0', AB: '2', PH: '1', Total: '26', basic: '21000', cost: '19000', contractor: 'Permanent', dept: 'IT', type: 'Permanent', mobile1: '9503115733' }]}
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
                    )
                } else if (daysInMonth === 29) {
                    return (
                        <MuiThemeProvider theme={theme}>
                            <MaterialTable
                                title="Manpower Report"
                                columns={[
                                    { title: 'Token No.', field: 'token' },
                                    { title: 'Name', field: 'name' },
                                    { title: 'DOJ', field: 'joindate' },
                                    { title: '1', field: '1' }, { title: '2', field: '2' }, { title: '3', field: '3' }, { title: '4', field: '4' },
                                    { title: '5', field: '5' }, { title: '6', field: '6' }, { title: '7', field: '7' }, { title: '8', field: '8' },
                                    { title: '9', field: '9' }, { title: '10', field: '10' }, { title: '11', field: '11' }, { title: '12', field: '12' },
                                    { title: '13', field: '13' }, { title: '14', field: '14' }, { title: '15', field: '15' }, { title: '16', field: '16' },
                                    { title: '17', field: '17' }, { title: '18', field: '18' }, { title: '19', field: '19' }, { title: '20', field: '20' },
                                    { title: '21', field: '21' }, { title: '22', field: '22' }, { title: '23', field: '23' }, { title: '24', field: '24' },
                                    { title: '25', field: '25' }, { title: '26', field: '26' }, { title: '27', field: '27' }, { title: '28', field: '28' },
                                    { title: '29', field: '29' }, { title: 'PRDS', field: 'PRDS' }, { title: 'CL', field: 'CL' }, { title: 'LW', field: 'LW' },
                                    { title: 'ESI', field: 'ESI' }, { title: 'AB', field: 'AB' }, { title: 'PH', field: 'PH' }, { title: 'Total', field: 'Total' },
                                    { title: 'Basic', field: 'basic' }, { title: 'Cost', field: 'cost' }, { title: 'Contractor', field: 'contractor' }, { title: 'Dept', field: 'dept' },
                                    { title: 'Category', field: 'type' },
                                    { title: 'Mob No.', field: 'mobile1' }
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
                    )
                } else if (daysInMonth === 30) {
                    return (
                        <MuiThemeProvider theme={theme}>
                            <MaterialTable
                                title="Manpower Report"
                                columns={[
                                    { title: 'Token No.', field: 'token' },
                                    { title: 'Name', field: 'name' },
                                    { title: 'DOJ', field: 'joindate' },
                                    { title: '1', field: '1' }, { title: '2', field: '2' }, { title: '3', field: '3' }, { title: '4', field: '4' },
                                    { title: '5', field: '5' }, { title: '6', field: '6' }, { title: '7', field: '7' }, { title: '8', field: '8' },
                                    { title: '9', field: '9' }, { title: '10', field: '10' }, { title: '11', field: '11' }, { title: '12', field: '12' },
                                    { title: '13', field: '13' }, { title: '14', field: '14' }, { title: '15', field: '15' }, { title: '16', field: '16' },
                                    { title: '17', field: '17' }, { title: '18', field: '18' }, { title: '19', field: '19' }, { title: '20', field: '20' },
                                    { title: '21', field: '21' }, { title: '22', field: '22' }, { title: '23', field: '23' }, { title: '24', field: '24' },
                                    { title: '25', field: '25' }, { title: '26', field: '26' }, { title: '27', field: '27' }, { title: '28', field: '28' },
                                    { title: '29', field: '29' }, { title: '30', field: '30' }, { title: 'PRDS', field: 'PRDS' }, { title: 'CL', field: 'CL' },
                                    { title: 'LW', field: 'LW' }, { title: 'ESI', field: 'ESI' }, { title: 'AB', field: 'AB' }, { title: 'PH', field: 'PH' },
                                    { title: 'Total', field: 'Total' }, { title: 'Basic', field: 'basic' }, { title: 'Cost', field: 'cost' }, { title: 'Contractor', field: 'contractor' },
                                    { title: 'Dept', field: 'dept' },
                                    { title: 'Category', field: 'type' },
                                    { title: 'Mob No.', field: 'mobile1' }
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
                    )
                } else if (daysInMonth === 31) {
                    return (
                        <MuiThemeProvider theme={theme}>
                            <MaterialTable
                                title="Manpower Report"
                                columns={[
                                    { title: 'Token No.', field: 'token' },
                                    { title: 'Name', field: 'name' },
                                    { title: 'DOJ', field: 'joindate' },
                                    { title: '1', field: '1' }, { title: '2', field: '2' }, { title: '3', field: '3' }, { title: '4', field: '4' },
                                    { title: '5', field: '5' }, { title: '6', field: '6' }, { title: '7', field: '7' }, { title: '8', field: '8' },
                                    { title: '9', field: '9' }, { title: '10', field: '10' }, { title: '11', field: '11' }, { title: '12', field: '12' },
                                    { title: '13', field: '13' }, { title: '14', field: '14' }, { title: '15', field: '15' }, { title: '16', field: '16' },
                                    { title: '17', field: '17' }, { title: '18', field: '18' }, { title: '19', field: '19' }, { title: '20', field: '20' },
                                    { title: '21', field: '21' }, { title: '22', field: '22' }, { title: '23', field: '23' }, { title: '24', field: '24' },
                                    { title: '25', field: '25' }, { title: '26', field: '26' }, { title: '27', field: '27' }, { title: '28', field: '28' },
                                    { title: '29', field: '29' }, { title: '30', field: '30' }, { title: '31', field: '31' }, { title: 'PRDS', field: 'PRDS' },
                                    { title: 'CL', field: 'CL' }, { title: 'LW', field: 'LW' }, { title: 'ESI', field: 'ESI' }, { title: 'AB', field: 'AB' },
                                    { title: 'PH', field: 'PH' }, { title: 'Total', field: 'Total' }, { title: 'Basic', field: 'basic' }, { title: 'Cost', field: 'cost' },
                                    { title: 'Contractor', field: 'contractor' },
                                    { title: 'Dept', field: 'dept' },
                                    { title: 'Category', field: 'type' },
                                    { title: 'Mob No.', field: 'mobile1' }
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
                    )
                }
            })()}
        </>
    )
}

export default ViewSummaryReport;