import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";
import axios from 'axios';
import { Button, Dialog, DialogActions, DialogTitle } from '@material-ui/core';
import ViewSkillDetailsPopup from '../../../components/Popup/ViewSkillDetailsPopup';
import ChangeLocationPopup from '../../../components/Popup/ChangeLocationPopup';
import ViewSkillDetails from './ViewSkillDetails';
import ChangeLocation from './ChangeLocation';
import ViewEmployeesPopup from "../../../components/Popup/ViewEmployeesPopup";
import ViewReport from "./ViewReport"
import dateFormat from 'dateformat';

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

function ViewManpower(props) {
    const [view, setView] = useState([]);
    const [open, setOpen] = useState(false);
    const [openSkillDetailsPopup, setSkillDetailsPopup] = useState(false);
    const [openChangeLocationPopup, setChangeLocationPopup] = useState(false);
    const [openEmployeesPopup, setOpenEmployeesPopup] = useState(false);
    const [token, setToken] = useState("");
    const [subdept, setSubDept] = useState("");
    const [name, setName] = useState("");

    const date = new Date();
    const endDate = dateFormat(date, "yyyy-mm-dd");
    const end = new Date();
    end.setDate(end.getDate() - 20);
    const startDate = dateFormat(end, "yyyy-mm-dd");

    const SkillDetailsPopup = () => {
        setSkillDetailsPopup(true);
    };

    const ReportPopup = () => {
        setOpenEmployeesPopup(true);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClickClose = () => {
        setOpenEmployeesPopup(false);
        setOpen(false);
    };

    const LocationChange = () => {
        setOpen(false);
        setChangeLocationPopup(true);
    };

    const handleClose = () => {
        setOpen(false);
        setChangeLocationPopup(false);
        setSkillDetailsPopup(false);
    };

    useEffect(() => {
        const { subdept } = props;
        const { location } = props;
        const { shift } = props;
        axios.post('http://192.168.1.52:3000/mp/getLocationData', {
            subdept: subdept,
            location: location,
            shift: shift
        }).then((response) => {
            setView(response.data);
        });
    }, [props]);

    return (
        <>
            <MuiThemeProvider theme={theme}>
                <MaterialTable
                    title="Allocated Employee"
                    columns={[
                        { title: 'Token No.', field: 'token' },
                        { title: 'Name', field: 'name', width: "40%" },
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
                        setName(rowData.name);
                        setSubDept(rowData.subdept);
                        handleClickOpen();
                    }}
                    actions={[
                        {
                            onClick: (event, rowData) => {
                                setToken(rowData.token);
                                setName(rowData.name);
                                setSubDept(rowData.subdept);
                                handleClickOpen();
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
                                Options
                            </Button>
                        ),
                    }}
                    options={{
                        pageSize: 5,
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
            <div>
                <Dialog open={open} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">
                        <div style={{ display: 'flex' }}>
                            <div style={{ flexGrow: 1, fontWeight: 'bold', paddingTop: '5px' }}>View/Change Details</div>
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
                        <Button onClick={LocationChange} color="primary">
                            Change Location
                        </Button>
                        <Button onClick={SkillDetailsPopup} color="primary">
                            Skill Details
                        </Button>
                        <Button onClick={ReportPopup} color="primary">
                            Report
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
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
            <ChangeLocationPopup
                openChangeLocationPopup={openChangeLocationPopup}
                name={name}
                onClose={handleClose}
            >
                <ChangeLocation
                    onSubmitClose={handleClose}
                    token={token}
                    subdept={subdept}
                />
            </ChangeLocationPopup>
            <ViewEmployeesPopup
                openEmployeesPopup={openEmployeesPopup}
                onClose={handleClickClose}
            >
                <ViewReport
                    token={token}
                    startDate={startDate}
                    endDate={endDate}
                />
            </ViewEmployeesPopup>
        </>
    )
}

export default ViewManpower;