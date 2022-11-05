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

function ViewRequirementsReport(props) {
    const [view, setView] = useState([]);

    useEffect(() => {
        const { token } = props;
        const { startDate } = props;
        const { endDate } = props;
        axios.post('http://localhost:3000/report/requirementsReport', {
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
                        { title: 'Updated Date', field: 'updatedate' },
                        { title: 'Updated By', field: 'name' },
                        { title: 'Shell Core', field: 'shell_core' },
                        { title: 'Cold Box', field: 'cold_box' },
                        { title: 'Arpa 900', field: 'arpa_900' },
                        { title: 'Arpa 450', field: 'arpa_450' },
                        { title: 'W B Q 3', field: 'w_b_q_3' },
                        { title: 'Hand Moulding', field: 'hand_moulding' },
                        { title: 'Melting', field: 'melting' },
                        { title: 'Fettling', field: 'fettling' }
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

export default ViewRequirementsReport;