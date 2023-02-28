import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import PageTitle from "../../../components/PageTitle/PageTitle";
import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";
import axios from 'axios';
import { getUser } from '../../../components/Utils/Common';
import { Button } from '@material-ui/core';
import ViewDetailsPopup from "../../../components/Popup/ViewDetailsPopup";
import ViewDetails from "./ViewDetails";

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

function PendingList() {
    const [view, setView] = useState([]);
    const user = getUser();
    const role = user[0].role;

    useEffect(() => {
        const user = getUser();
        if (user[0].role === 'contractor') {
            const contractor = user[0].contractor;
            const role = 'employee';
            axios.post('http://192.168.1.52:3000/emp/viewPendingVerify', {
                contractor: contractor,
                role: role
            }).then((response) => {
                setView(response.data);
            });
        } else {
            axios.get('http://192.168.1.52:3000/emp/viewAllPendingVerify')
                .then((response) => {
                    setView(response.data);
                });
        }
    }, []);

    const [openDetailsPopup, setOpenDetailsPopup] = useState(false);
    const [token, setToken] = useState("");

    const handleClickOpen = () => {
        setOpenDetailsPopup(true);
    };

    const handleClose = () => {
        setOpenDetailsPopup(false);
    };
    return (
        <>
            <PageTitle title="Pending Verification List" />
            {(() => {
                if (role === 'contractor') {
                    return (
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
                                    }
                                }}
                            />
                        </MuiThemeProvider>
                    )
                } else if (user[0].role === 'hod') {
                    return (
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
                                    }
                                }}
                            />
                        </MuiThemeProvider>
                    )
                } else {
                    return (
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
                                            Verify
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
                    )
                }
            })()}
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

export default PendingList;