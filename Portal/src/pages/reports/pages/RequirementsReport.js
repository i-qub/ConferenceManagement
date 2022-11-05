import React, { useState } from 'react';
import PageTitle from "../../../components/PageTitle/PageTitle";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Button, Grid, TextField } from '@material-ui/core';
import ViewRequirementsReport from "./ViewRequirementsReport";
import ViewEmployeesPopup from "../../../components/Popup/ViewEmployeesPopup";

function RequirementsReport() {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [openEmployeesPopup, setOpenEmployeesPopup] = useState(false);
    const handleOpen = () => {
        setOpenEmployeesPopup(true);
    };

    const handleClickClose = () => {
        setOpenEmployeesPopup(false);
        window.location.reload();
    };
    return (
        <>
            <PageTitle title="Requirements Report" />
            <h3 style={{ color: 'coral' }}>Select Date Range for Report</h3>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={2}>
                    <TextField
                        required
                        id="startDate"
                        name="startDate"
                        type="date"
                        label="Start Date"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(event) => { setStartDate(event.target.value); }}
                    />
                </Grid>
                <Grid item xs={12} sm={2}>
                    <TextField
                        required
                        id="endDate"
                        name="endDate"
                        type="date"
                        label="End Date"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(event) => { setEndDate(event.target.value); }}
                    />
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Button
                        disabled={
                            startDate.length === 0 || endDate.length === 0
                        }
                        type='submit'
                        variant='contained'
                        color='primary'
                        onClick={handleOpen}
                    >
                        View Report
                    </Button>
                </Grid>
            </Grid>
            <ViewEmployeesPopup
                openEmployeesPopup={openEmployeesPopup}
                onClose={handleClickClose}
            >
                <ViewRequirementsReport
                    startDate={startDate}
                    endDate={endDate}
                />
            </ViewEmployeesPopup>
            <br></br>
            <br></br>
            <br></br>
        </>
    )
}

export default RequirementsReport;