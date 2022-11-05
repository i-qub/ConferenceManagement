import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { Button } from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
        width: '100%',
    }
}));

export default function ChangeLocation(props) {
    const { token } = props;
    const { onSubmitClose } = props;
    const classes = useStyles();

    useEffect(() => {
        const { token } = props;
        axios.post('http://localhost:3000/emp/viewDetails', {
            token: token
        }).then((response) => {
            setDepartment(response.data[0].dept);
            setSubDept(response.data[0].subdept);
            setLocation(response.data[0].location);
        });
    }, [props]);

    const [dept, setDepartment] = useState("");
    const [subdept, setSubDept] = useState("");
    const [location, setLocation] = useState("");

    const changeLocation = (event) => {
        event.preventDefault();
        if (dept === 'Melting') {
            axios.post("http://localhost:3000/emp/changeLocation", {
                token: token, dept: dept, subdept: dept, location: location
            },
                onSubmitClose());
            window.location.reload();
        } else if (dept === 'Fettling') {
            axios.post("http://localhost:3000/emp/changeLocation", {
                token: token, dept: dept, subdept: dept, location: location
            },
                onSubmitClose());
            window.location.reload();
        } else if (subdept === 'Hand Moulding') {
            axios.post("http://localhost:3000/emp/changeLocation", {
                token: token, dept: dept, subdept: subdept, location: subdept
            },
                onSubmitClose());
            window.location.reload();
        } else {
            axios.post("http://localhost:3000/emp/changeLocation", {
                token: token, dept: dept, subdept: subdept, location: location
            },
                onSubmitClose());
            window.location.reload();
        }
    };

    return (
        <>
            <form onSubmit={changeLocation}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <FormControl required className={classes.formControl}>
                            <InputLabel required htmlFor="age-native-required" className={classes.formControl}>Choose Department</InputLabel>
                            <Select
                                native
                                onChange={(event) => { setDepartment(event.target.value); }}
                                style={{ width: '100%' }}
                                value={dept}
                            >
                                <option aria-label="None" value="" />
                                <option value="Core Shop">Core Shop</option>
                                <option value="Moulding">Moulding</option>
                                <option value="Melting">Melting</option>
                                <option value="Fettling">Fettling</option>
                            </Select>
                        </FormControl>
                    </Grid>
                    {(() => {
                        if (dept === 'Core Shop') {
                            return (
                                <Grid item xs={12} sm={4}>
                                    <FormControl required className={classes.formControl}>
                                        <InputLabel htmlFor="age-native-required" required className={classes.formControl}>Sub Department</InputLabel>
                                        <Select
                                            native
                                            onChange={(event) => { setSubDept(event.target.value); }}
                                            style={{ width: '100%' }}
                                            value={subdept}
                                        >
                                            <option aria-label="None" value="" />
                                            <option value="Shell Core">Shell Core</option>
                                            <option value="Cold Box">Cold Box</option>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            )
                        } else if (dept === 'Moulding') {
                            return (
                                <Grid item xs={12} sm={4}>
                                    <FormControl required className={classes.formControl}>
                                        <InputLabel htmlFor="age-native-required" required className={classes.formControl}>Sub Department</InputLabel>
                                        <Select
                                            native
                                            onChange={(event) => { setSubDept(event.target.value); }}
                                            style={{ width: '100%' }}
                                            value={subdept}
                                        >
                                            <option aria-label="None" value="" />
                                            <option value="Arpa 900">Arpa 900</option>
                                            <option value="Arpa 450">Arpa 450</option>
                                            <option value="W B Q 3">W B Q 3</option>
                                            <option value="Hand Moulding">Hand Moulding</option>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            )
                        } else if (dept === 'Melting') {
                            return (
                                <Grid item xs={12} sm={4}>
                                    <FormControl required className={classes.formControl}>
                                        <InputLabel htmlFor="age-native-required" required className={classes.formControl}>Location</InputLabel>
                                        <Select
                                            native
                                            onChange={(event) => { setLocation(event.target.value); setSubDept(''); }}
                                            style={{ width: '100%' }}
                                            value={location}
                                        >
                                            <option aria-label="None" value="" />
                                            <option value="PANEL NO-1 Op.">PANEL NO-1 Op.</option>
                                            <option value="PANEL NO-1 CO-Op.">PANEL NO-1 CO-Op.</option>
                                            <option value="PANEL NO-1 CHARGE COLLECTOR">PANEL NO-1 CHARGE COLLECTOR</option>
                                            <option value="PANEL NO-2 Op.">PANEL NO-2 Op.</option>
                                            <option value="PANEL NO-2 CO-Op.">PANEL NO-2 CO-Op.</option>
                                            <option value="PANEL NO-3 Op.">PANEL NO-3 Op.</option>
                                            <option value="PANEL NO-3 CO-Op.">PANEL NO-3 CO-Op.</option>
                                            <option value="SPECTRO COIN & TEST BAR SAMPLE">SPECTRO COIN & TEST BAR SAMPLE</option>
                                            <option value="CRANE Op.">CRANE Op.</option>
                                            <option value="SLAG COLLECTOR PANEL 01">SLAG COLLECTOR PANEL 01</option>
                                            <option value="SLAG COLLECTOR PANEL 02">SLAG COLLECTOR PANEL 02</option>
                                            <option value="SLAG COLLECTOR PANEL 03">SLAG COLLECTOR PANEL 03</option>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            )
                        } else if (dept === 'Fettling') {
                            return (
                                <Grid item xs={12} sm={4}>
                                    <FormControl required className={classes.formControl}>
                                        <InputLabel htmlFor="age-native-required" required className={classes.formControl}>Location</InputLabel>
                                        <Select
                                            native
                                            onChange={(event) => { setLocation(event.target.value); setSubDept(''); }}
                                            style={{ width: '100%' }}
                                            value={location}
                                        >
                                            <option aria-label="None" value="" />
                                            <option value="FINAL FETTLING ALL ITEM">FINAL FETTLING ALL ITEM</option>
                                            <option value="AVERAGING">AVERAGING</option>
                                            <option value="CRANE OPERATING">CRANE OPERATING</option>
                                            <option value="SAMI FINAL FETTLING">SAMI FINAL FETTLING</option>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            )
                        }
                    })()}
                    {(() => {
                        if (subdept === 'Shell Core') {
                            return (
                                <Grid item xs={12} sm={4}>
                                    <FormControl required className={classes.formControl}>
                                        <InputLabel htmlFor="age-native-required" required className={classes.formControl}>Location</InputLabel>
                                        <Select
                                            native
                                            onChange={(event) => { setLocation(event.target.value); }}
                                            style={{ width: '100%' }}
                                            value={location}
                                        >
                                            <option aria-label="None" value="" />
                                            <option value="Shell Machine No.01">Shell Machine No.01</option>
                                            <option value="Shell Machine No.02">Shell Machine No.02</option>
                                            <option value="Shell Machine No.03">Shell Machine No.03</option>
                                            <option value="Shell Machine No.04">Shell Machine No.04</option>
                                            <option value="Shell Machine No.05">Shell Machine No.05</option>
                                            <option value="Shell Machine No.05 Co-Op.">Shell Machine No.05 Co-Op.</option>
                                            <option value="Shell Machine No.06">Shell Machine No.06</option>
                                            <option value="Shell Machine No.07">Shell Machine No.07</option>
                                            <option value="Shell Machine No.08">Shell Machine No.08</option>
                                            <option value="Shell Machine No.09">Shell Machine No.09</option>
                                            <option value="Shell Machine No.10">Shell Machine No.10</option>
                                            <option value="Shell Machine No.12">Shell Machine No.12</option>
                                            <option value="Shell Machine No.13">Shell Machine No.13</option>
                                            <option value="Shell Machine No.14">Shell Machine No.14</option>
                                            <option value="Shell Machine No.15">Shell Machine No.15</option>
                                            <option value="Shell Machine No.16">Shell Machine No.16</option>
                                            <option value="Shell Machine No.17">Shell Machine No.17</option>
                                            <option value="Shell Machine No.19">Shell Machine No.19</option>
                                            <option value="Shell Machine No.20">Shell Machine No.20</option>
                                            <option value="Shell Machine No.21">Shell Machine No.21</option>
                                            <option value="Shell Machine No.22">Shell Machine No.22</option>
                                            <option value="JD Head Assembly 01">JD Head Assembly 01</option>
                                            <option value="JD Head Assembly 02">JD Head Assembly 02</option>
                                            <option value="JD Head Assembly Co-Op.">JD Head Assembly Co-Op.</option>
                                            <option value="Same Head">Same Head</option>
                                            <option value="Same KF Head 01">Same KF Head 01</option>
                                            <option value="Same KF Head Co-Op. 01">Same KF Head Co-Op. 01</option>
                                            <option value="Same KF Head Co-Op. 02">Same KF Head Co-Op. 02</option>
                                            <option value="TATA 4Sp block">TATA 4Sp block</option>
                                            <option value="Core Oven Op.">Core Oven Op.</option>
                                            <option value="Core Oven Co-Op. 01">Core Oven Co-Op. 01</option>
                                            <option value="Core Oven Co-Op. 02">Core Oven Co-Op. 02</option>
                                            <option value="Core Oven Co-Op. 03">Core Oven Co-Op. 03</option>
                                            <option value="Inspection">Inspection</option>
                                            <option value="Inspection Co-Op.">Inspection Co-Op.</option>
                                            <option value="Assembly Dipping">Assembly Dipping</option>
                                            <option value="Tool change">Tool Change</option>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            )
                        } else if (subdept === 'Cold Box') {
                            return (
                                <Grid item xs={12} sm={4}>
                                    <FormControl required className={classes.formControl}>
                                        <InputLabel htmlFor="age-native-required" required className={classes.formControl}>Location</InputLabel>
                                        <Select
                                            native
                                            onChange={(event) => { setLocation(event.target.value); }}
                                            style={{ width: '100%' }}
                                            value={location}
                                        >
                                            <option aria-label="None" value="" />
                                            <option value="Cold Box Machine No.01">Cold Box Machine No.01</option>
                                            <option value="Cold Box Machine No.01 Co-Op.">Cold Box Machine No.01 Co-Op.</option>
                                            <option value="Cold Box Machine No.02">Cold Box Machine No.02</option>
                                            <option value="Cold Box Machine No.02 Co-Op. 01">Cold Box Machine No.02 Co-Op. 01</option>
                                            <option value="Cold Box Machine No.02 Co-Op. 02">Cold Box Machine No.02 Co-Op. 02</option>
                                            <option value="Cold Box Machine No.03">Cold Box Machine No.03</option>
                                            <option value="Cold Box Machine No.03 Co-Op.">Cold Box Machine No.03 Co-Op.</option>
                                            <option value="Cold Box Machine No.04">Cold Box Machine No.04</option>
                                            <option value="Cold Box Machine No.04 Co-Op.">Cold Box Machine No.04 Co-Op.</option>
                                            <option value="Cold Box Machine No.05">Cold Box Machine No.05</option>
                                            <option value="Cold Box Machine No.05 Co-Op. 01">Cold Box Machine No.05 Co-Op. 01</option>
                                            <option value="Cold Box Machine No.05 Co-Op. 02">Cold Box Machine No.05 Co-Op. 02</option>
                                            <option value="Cold Box Machine No.06">Cold Box Machine No.06</option>
                                            <option value="Cold Box Machine No.06 Co-Op. 01">Cold Box Machine No.06 Co-Op. 01</option>
                                            <option value="Cold Box Machine No.06 Co-Op. 02">Cold Box Machine No.06 Co-Op. 02</option>
                                            <option value="Cold Box Machine No.07">Cold Box Machine No.07</option>
                                            <option value="Cold Box Machine No.07 Co-Op. 01">Cold Box Machine No.07 Co-Op. 01</option>
                                            <option value="Cold Box Machine No.07 Co-Op. 02">Cold Box Machine No.07 Co-Op. 02</option>
                                            <option value="Cold Box Machine No.08">Cold Box Machine No.08</option>
                                            <option value="Cold Box Machine No.08 Co-Op.">Cold Box Machine No.08 Co-Op.</option>
                                            <option value="Cold Box Machine No.09">Cold Box Machine No.09</option>
                                            <option value="Cold Box Machine No.10">Cold Box Machine No.10</option>
                                            <option value="Cold Box Machine No.11">Cold Box Machine No.11</option>
                                            <option value="Cold Box Machine No.11 Co-Op.">Cold Box Machine No.11 Co-Op.</option>
                                            <option value="Sand Feeding 01">Sand Feeding 01</option>
                                            <option value="Sand Feeding 02">Sand Feeding 02</option>
                                            <option value="Mixer 900">Mixer 900</option>
                                            <option value="Mixer 450">Mixer 450</option>
                                            <option value="Painting Skilled Op.">Painting Skilled Op.</option>
                                            <option value="Painting Op. 900-01">Painting Op. 900-01</option>
                                            <option value="Painting Op. 900-02">Painting Op. 900-02</option>
                                            <option value="Painting Op. 900-03">Painting Op. 900-03</option>
                                            <option value="Painting Skilled Op. Arpa 450">Painting Skilled Op. Arpa 450</option>
                                            <option value="Painting Op. Arpa 450">Painting Op. Arpa 450</option>
                                            <option value="Skilled Inspector Arpa 450">Skilled Inspector Arpa 450</option>
                                            <option value="Oven Skilled Op.">Oven Skilled Op.</option>
                                            <option value="Oven Co-Op.">Oven Co-Op.</option>
                                            <option value="Core Box Cleaning & Vent Changing">Core Box Cleaning & Vent Changing</option>
                                            <option value="Inspection Arpa 900">Inspection Arpa 900</option>
                                            <option value="Inspection Co-Op. Arpa 900">Inspection Co-Op. Arpa 900</option>
                                            <option value="Assembly Op. 450">Assembly Op. 450</option>
                                            <option value="Assembly 450 Co-Op.">Assembly 450 Co-Op.</option>
                                            <option value="Tool Change">Tool Change</option>
                                            <option value="Venting Skill Op.">Venting Skill Op.</option>
                                            <option value="Venting Skill Co-Op. 01">Venting Skill Co-Op. 01</option>
                                            <option value="Venting Skill Co-Op. 02">Venting Skill Co-Op. 02</option>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            )
                        } else if (subdept === 'Arpa 900') {
                            return (
                                <Grid item xs={12} sm={4}>
                                    <FormControl required className={classes.formControl}>
                                        <InputLabel htmlFor="age-native-required" required className={classes.formControl}>Location</InputLabel>
                                        <Select
                                            native
                                            onChange={(event) => { setLocation(event.target.value); }}
                                            style={{ width: '100%' }}
                                            value={location}
                                        >
                                            <option aria-label="None" value="" />
                                            <option value="COPE M/C Op.">COPE M/C Op.</option>
                                            <option value="M/C CO-Op.(AIR) 01">M/C CO-Op.(AIR) 01</option>
                                            <option value="M/C CO-Op.">M/C CO-Op.</option>
                                            <option value="DRAG M/C Op.">DRAG M/C Op.</option>
                                            <option value="M/C CO-Op.(AIR) 02">M/C CO-Op.(AIR) 02</option>
                                            <option value="M/C CO-Op.">M/C CO-Op.</option>
                                            <option value="DRAG MOULD PAINTING Op.">DRAG MOULD PAINTING Op.</option>
                                            <option value="CORE SETTING Op. 01">CORE SETTING Op. 01</option>
                                            <option value="CORE SETTING Op. 02">CORE SETTING Op. 02</option>
                                            <option value="CORE TRANFER FIXTURE Op.">CORE TRANFER FIXTURE Op.</option>
                                            <option value="BOX CLOSING Op.">BOX CLOSING Op.</option>
                                            <option value="VENTING Op. 01">VENTING Op. 01</option>
                                            <option value="VENTING Op. 02">VENTING Op. 02</option>
                                            <option value="COPE BOX PREPRATION Op.">COPE BOX PREPRATION Op.</option>
                                            <option value="CLAMPING Op. 01">CLAMPING Op. 01</option>
                                            <option value="CLAMPING Op. 02">CLAMPING Op. 02</option>
                                            <option value="MOLD BOX TRANSFER Op.">MOLD BOX TRANSFER Op.</option>
                                            <option value="CLAMP & PIN REMOVING Op.">CLAMP & PIN REMOVING Op.</option>
                                            <option value="POURING CRANE Op.">POURING CRANE Op.</option>
                                            <option value="POURING Op.">POURING Op.</option>
                                            <option value="K-OUT CRANE Op.">K-OUT CRANE Op.</option>
                                            <option value="K-OUT CRANE CO-Op.">K-OUT CRANE CO-Op.</option>
                                            <option value="K-OUT Op.">K-OUT Op.</option>
                                            <option value="CASTING TRANSFER Op.">CASTING TRANSFER Op.</option>
                                            <option value="EMPTY BOX TRASFER Op.">EMPTY BOX TRASFER Op.</option>
                                            <option value="SAND PLANT Op.">SAND PLANT Op.</option>
                                            <option value="SAND PLANT CO-Op.">SAND PLANT CO-Op.</option>
                                            <option value="NEW SAND ADD Op.">NEW SAND ADD Op.</option>
                                            <option value="COMPACTIBILITY CHECKING Op.">COMPACTIBILITY CHECKING Op.</option>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            )
                        } else if (subdept === 'Arpa 450') {
                            return (
                                <Grid item xs={12} sm={4}>
                                    <FormControl required className={classes.formControl}>
                                        <InputLabel htmlFor="age-native-required" required className={classes.formControl}>Location</InputLabel>
                                        <Select
                                            native
                                            onChange={(event) => { setLocation(event.target.value); }}
                                            style={{ width: '100%' }}
                                            value={location}
                                        >
                                            <option aria-label="None" value="" />
                                            <option value="COPE M/C Op.">COPE M/C Op.</option>
                                            <option value="COPE BOX LOADING Op.">COPE BOX LOADING Op.</option>
                                            <option value="DRAG M/C Op.">DRAG M/C Op.</option>
                                            <option value="DRAG BOX LOADING Op.">DRAG BOX LOADING Op.</option>
                                            <option value="DRAG BOX UNLOADING OP">DRAG BOX UNLOADING OP</option>
                                            <option value="CORE TRANFER FIXTURE Op.">CORE TRANFER FIXTURE Op.</option>
                                            <option value="CORE TRANFER FIXTURE CO-Op.">CORE TRANFER FIXTURE CO-Op.</option>
                                            <option value="CORE SETTING Op.">CORE SETTING Op.</option>
                                            <option value="CLAMPING Op. 01">CLAMPING Op. 01</option>
                                            <option value="CLAMPING Op. 02">CLAMPING Op. 02</option>
                                            <option value="DRAG MOULD VENTING Op.">DRAG MOULD VENTING Op.</option>
                                            <option value="VENTING Op. 01">VENTING Op. 01</option>
                                            <option value="VENTING Op. 02">VENTING Op. 02</option>
                                            <option value="BOX CLOSING Op.">BOX CLOSING Op.</option>
                                            <option value="POURING CRANE Op.">POURING CRANE Op.</option>
                                            <option value="POURING Op.">POURING Op.</option>
                                            <option value="K-OUT Op.">K-OUT Op.</option>
                                            <option value="CASTING TRANSFER Op.">CASTING TRANSFER Op.</option>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            )
                        } else if (subdept === 'W B Q 3') {
                            return (
                                <Grid item xs={12} sm={4}>
                                    <FormControl required className={classes.formControl}>
                                        <InputLabel htmlFor="age-native-required" required className={classes.formControl}>Location</InputLabel>
                                        <Select
                                            native
                                            onChange={(event) => { setLocation(event.target.value); }}
                                            style={{ width: '100%' }}
                                            value={location}
                                        >
                                            <option aria-label="None" value="" />
                                            <option value="COPE M/C Op.">COPE M/C Op.</option>
                                            <option value="COPE M/C CO-Op. 01">COPE M/C CO-Op. 01</option>
                                            <option value="COPE M/C CO-Op. 02">COPE M/C CO-Op. 02</option>
                                            <option value="DRAG M/C CO-Op.">DRAG M/C CO-Op.</option>
                                            <option value="EMPTY PALLET TRASFER Op.">EMPTY PALLET TRASFER Op.</option>
                                            <option value="DRAG BOX VENTING Op.">DRAG BOX VENTING Op.</option>
                                            <option value="DRAG CORE SETTING Op.">DRAG CORE SETTING Op.</option>
                                            <option value="COPE CORE SETTING Op.">COPE CORE SETTING Op.</option>
                                            <option value="VENTING Op. 01">VENTING Op. 01</option>
                                            <option value="VENTING Op. 02">VENTING Op. 02</option>
                                            <option value="VENTING Op. 03">VENTING Op. 03</option>
                                            <option value="BOX CLOSING Op.">BOX CLOSING Op.</option>
                                            <option value="BOX CLOSING CO-Op.">BOX CLOSING CO-Op.</option>
                                            <option value="CLAMPING Op. 01">CLAMPING Op. 01</option>
                                            <option value="CLAMPING Op. 02">CLAMPING Op. 02</option>
                                            <option value="MOLD BOX TRANSFER Op.">MOLD BOX TRANSFER Op.</option>
                                            <option value="POURING CRANE Op.">POURING CRANE Op.</option>
                                            <option value="POURING Op.">POURING Op.</option>
                                            <option value="K-OUT Op.">K-OUT Op.</option>
                                            <option value="K-OUT CO-Op.">K-OUT CO-Op.</option>
                                            <option value="SAND PLANT Op.">SAND PLANT Op.</option>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            )
                        }
                    })()}
                    < Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                            <Button
                                type="submit"
                                style={{
                                    fontSize: "18px",
                                }}
                                color="primary"
                                variant="contained"
                            >
                                Change Location
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </>
    );
}
