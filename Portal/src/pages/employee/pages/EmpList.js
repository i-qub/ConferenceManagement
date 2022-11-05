import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import PageTitle from "../../../components/PageTitle/PageTitle";
import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';
import axios from 'axios';
import { getUser } from '../../../components/Utils/Common';
import ViewDetailsPopup from '../../../components/Popup/ViewDetailsPopup';
import ViewSkillDetailsPopup from '../../../components/Popup/ViewSkillDetailsPopup';
import ViewDetails from './ViewDetails';
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

function EmpList() {
    const [view, setView] = useState([]);
    const user = getUser();
    const role = user[0].role;

    useEffect(() => {
        const user = getUser();

        if (user[0].role === 'contractor') {
            const contractor = user[0].contractor;
            axios.post('http://localhost:3000/emp/viewContractorEmployee', {
                contractor: contractor
            }).then((response) => {
                setView(response.data);
            });
        } else {
            axios.get('http://localhost:3000/emp/viewAllEmployee')
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

    const [deactivationDate, setDeactivationDate] = useState("");
    const [openDeactivation, setOpenDeactivation] = useState(false);

    const handleClickOpenDeactivation = () => {
        setOpenDeactivation(true);
    };

    const handleClickCloseDeactivation = () => {
        setOpenDeactivation(false);
    };

    const [openDetailsPopup, setEmployeeDetailsPopup] = useState(false);
    const [openSkillDetailsPopup, setSkillDetailsPopup] = useState(false);
    const [token, setToken] = useState("");
    const [subdept, setSubDept] = useState("");
    const [name, setName] = useState("");

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

    const deactivate = () => {
        axios.post('http://localhost:3000/emp/deactivateEmp', {
            token: token,
            deactivationDate: deactivationDate
        })
        window.location.reload();
    }

    return (
        <>
            <PageTitle title="Employee List" />
            {(() => {
                if (role === 'contractor') {
                    return (
                        <MuiThemeProvider theme={theme}>
                            <MaterialTable
                                title="Employee List"
                                columns={[
                                    { title: 'Token No.', field: 'token' },
                                    { title: 'Name', field: 'name', width: "40%" },
                                    { title: 'Join Date', field: 'joindate' },
                                    { title: 'End Date', field: 'enddate' },
                                    { title: 'Mobile No.', field: 'mobile1' },
                                    { title: 'Department', field: 'dept' },
                                    { title: 'Sub Dept', field: 'dept' },
                                    { title: 'Location', field: 'dept' }
                                ]}
                                fontSize='12px'
                                data={view}
                                onRowClick={(event, rowData) => {
                                    setToken(rowData.token);
                                    setName(rowData.name);
                                    setSubDept(rowData.subdept);
                                    handleClickOpen();
                                }}
                                actions={[
                                    {
                                        tooltip: 'Deactivate User',
                                        onClick: (event, rowData) => {
                                            event.stopPropagation();
                                            setToken(rowData.token);
                                            handleClickOpenDeactivation();
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
                                        backgroundColor: '#262626',
                                        color: '#FFF',
                                        fontSize: '14px',
                                        padding: '15px',
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
                } else {
                    return (
                        <MuiThemeProvider theme={theme}>
                            <MaterialTable
                                title="Employee List"
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
                                onRowClick={(event, rowData) => {
                                    setToken(rowData.token);
                                    setName(rowData.name);
                                    setSubDept(rowData.subdept);
                                    handleClickOpen();
                                }}
                                actions={[
                                    {
                                        tooltip: 'Deactivate User',
                                        onClick: (event, rowData) => {
                                            event.stopPropagation();
                                            setToken(rowData.token);
                                            handleClickOpenDeactivation();
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
                                        backgroundColor: '#262626',
                                        color: '#FFF',
                                        fontSize: '14px',
                                        padding: '15px',
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
            <div>
                <Dialog open={openDeactivation} onClose={handleClickCloseDeactivation} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Select Deactivation Date</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="deactivationDate"
                            type="date"
                            fullWidth
                            onChange={(event) => { setDeactivationDate(event.target.value); }}
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
                <ViewDetails
                    onSubmitClose={handleClose}
                    token={token}
                />
            </ViewDetailsPopup>
            <ViewSkillDetailsPopup
                openSkillDetailsPopup={openSkillDetailsPopup}
                token={token}
                name={name}
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

export default EmpList;