import React, { useState } from 'react';
import PageTitle from "../../../components/PageTitle/PageTitle";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Button, FormControl, Grid, InputLabel, Select } from '@material-ui/core';
import ViewSummaryReport from "./ViewSummaryReport";
import ViewEmployeesPopup from "../../../components/Popup/ViewEmployeesPopup";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
        width: '100%',
    }
}));

function SummaryReport() {
    const classes = useStyles();
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
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
            <PageTitle title="Summary Report" />
            <h3 style={{ color: 'coral' }}>Select Month & Year for Report</h3>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={2}>
                    <FormControl required className={classes.formControl}>
                        <InputLabel htmlFor="age-native-required" required className={classes.formControl}>Month</InputLabel>
                        <Select
                            native
                            onChange={(event) => { setMonth(event.target.value); }}
                            style={{ width: '100%' }}
                        >
                            <option aria-label="None" value="" />
                            <option value="01">January</option>
                            <option value="02">February</option>
                            <option value="03">March</option>
                            <option value="04">April</option>
                            <option value="05">May</option>
                            <option value="06">June</option>
                            <option value="07">July</option>
                            <option value="08">August</option>
                            <option value="09">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <FormControl required className={classes.formControl}>
                        <InputLabel htmlFor="age-native-required" required className={classes.formControl}>Year</InputLabel>
                        <Select
                            native
                            onChange={(event) => { setYear(event.target.value); }}
                            style={{ width: '100%' }}
                        >
                            <option aria-label="None" value="" />
                            {/* <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option> */}
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Button
                        disabled={
                            month.length === 0 || year.length === 0
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
                <ViewSummaryReport
                    month={month}
                    year={year}
                />
            </ViewEmployeesPopup>
            <br></br>
            <br></br>
            <br></br>
        </>
    )
}

export default SummaryReport;