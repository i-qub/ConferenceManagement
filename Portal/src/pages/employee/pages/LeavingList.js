import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import PageTitle from "../../../components/PageTitle/PageTitle";
import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";
import axios from 'axios';
import { getUser } from '../../../components/Utils/Common';
import { Button, Dialog, DialogActions, DialogTitle } from '@material-ui/core';
import ViewDetailsPopup from '../../../components/Popup/ViewDetailsPopup';
import ViewDetails from './ViewDetails';
import ViewSkillDetailsPopup from '../../../components/Popup/ViewSkillDetailsPopup';
import ViewSkillDetails from './ViewSkillDetails';

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

function LeavingList() {
    const [view, setView] = useState([]);
    const user = getUser();
    const role = user[0].role;

    useEffect(() => {
        const user = getUser();
        if (user[0].role === 'contractor') {
            const contractor = user[0].contractor;
            axios.post('http://localhost:3000/emp/leavingListOfContarctor', {
                contractor: contractor
            }).then((response) => {
                setView(response.data);
            });
        } else {
            axios.get('http://localhost:3000/emp/leavingListOfAll')
                .then((response) => {
                    setView(response.data);
                });
        }
    }, []);
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
    return (
        <>
            <PageTitle title="This Month Leaving Employees List" />
            {(() => {
                if (role === 'contractor') {
                    return (
                        <MuiThemeProvider theme={theme}>
                            <MaterialTable
                                title="Skill Wise List"
                                columns={[
                                    { title: 'Token No.', field: 'token' },
                                    { title: 'Name', field: 'name', width: "40%" },
                                    { title: 'Contractor', field: 'contractor' },
                                    { title: 'Join Date', field: 'joindate' },
                                    { title: 'End Date', field: 'enddate' },
                                    { title: 'Mobile No.', field: 'mobile1' },
                                    { title: 'Department', field: 'dept' },
                                    { title: 'Sub Dept', field: 'subdept' },
                                    { title: 'Location', field: 'location' }
                                ]}
                                fontSize='12px'
                                data={view}
                                onRowClick={(event, rowData) => {
                                    setToken(rowData.token);
                                    setSubDept(rowData.subdept);
                                    handleClickOpen();
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
                                    }
                                }}
                            />
                        </MuiThemeProvider>
                    )
                } else if (user[0].role === 'hod') {
                    return (
                        <MuiThemeProvider theme={theme}>
                            <MaterialTable
                                title="Skill Wise List"
                                columns={[
                                    { title: 'Token No.', field: 'token' },
                                    { title: 'Name', field: 'name', width: "40%" },
                                    { title: 'Contractor', field: 'contractor' },
                                    { title: 'Join Date', field: 'joindate' },
                                    { title: 'End Date', field: 'enddate' },
                                    { title: 'Mobile No.', field: 'mobile1' },
                                    { title: 'Department', field: 'dept' },
                                    { title: 'Sub Dept', field: 'subdept' },
                                    { title: 'Location', field: 'location' }
                                ]}
                                fontSize='12px'
                                data={view}
                                onRowClick={(event, rowData) => {
                                    setToken(rowData.token);
                                    setSubDept(rowData.subdept);
                                    handleClickOpen();
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
                                    }
                                }}
                            />
                        </MuiThemeProvider>
                    )
                } else {
                    return (
                        <MuiThemeProvider theme={theme}>
                            <MaterialTable
                                title="Skill Wise List"
                                columns={[
                                    { title: 'Token No.', field: 'token' },
                                    { title: 'Name', field: 'name', width: "40%" },
                                    { title: 'Contractor', field: 'contractor' },
                                    { title: 'Join Date', field: 'joindate' },
                                    { title: 'End Date', field: 'enddate' },
                                    { title: 'Mobile No.', field: 'mobile1' },
                                    { title: 'Department', field: 'dept' },
                                    { title: 'Sub Dept', field: 'subdept' },
                                    { title: 'Location', field: 'location' }
                                ]}
                                fontSize='12px'
                                data={view}
                                onRowClick={(event, rowData) => {
                                    setToken(rowData.token);
                                    setSubDept(rowData.subdept);
                                    handleClickOpen();
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
            <div>
                <Dialog open={open} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">
                        <div style={{ display: 'flex' }}>
                            <div style={{ flexGrow: 1, fontWeight: 'bold', paddingTop: '5px' }}>View Details</div>
                            <Button
                                style={{
                                    fontSize: "16px",
                                    minWidth: "8px",
                                    maxHeight: "35px"
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
            <br></br>
            <br></br>
            <br></br>
        </>
    )
}

export default LeavingList;