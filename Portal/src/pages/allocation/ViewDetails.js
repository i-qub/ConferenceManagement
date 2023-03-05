import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormLabel from '@material-ui/core/FormLabel';
import { Button, FormControlLabel, FormLabel, Radio, RadioGroup } from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
        width: '100%',
    }
}));

export default function ViewDetails(props) {
    const { onSubmitClose } = props;
    const classes = useStyles();
    const [view, setView] = useState("");

    useEffect(() => {
        const { token } = props;
        axios.post('http://localhost/emp/viewDetails', {
            token: token
        }).then((response) => {
            setView(response.data[0]);
            setGender(response.data[0].gender);
            setMaritalStatus(response.data[0].maritalstatus);
            setMedicalCheckup(response.data[0].medicalcheckup);
        });
    }, [props]);


    const token = view.token;

    // const [name, setName] = useState("");
    // const [dob, setDOB] = useState("");
    // const [dobplace, setDobPlace] = useState("");
    // const [age, setAge] = useState("");
    const [gender, setGender] = useState('');
    const [maritalstatus, setMaritalStatus] = useState('');
    const [medicalcheckup, setMedicalCheckup] = useState('');
    // const [address, setAddress] = useState("");
    // const [paddress, setPaddress] = useState("");
    // const [city, setCity] = useState("");
    // const [state, setState] = useState("");
    // const [zipcode, setZipCode] = useState("");
    // const [country, setCountry] = useState("");
    // const [email, setEmail] = useState("");
    // const [mobile1, setMobile1] = useState("");
    // const [mobile2, setMobile2] = useState("");
    // const [contractor, setContractor] = useState("");
    const [dept, setDepartment] = useState("");
    const [subdept, setSubDept] = useState("");
    const [location, setLocation] = useState("");
    // const [joindate, setJoinDate] = useState("");
    // const [enddate, setEndDate] = useState("");
    // const [role, setRole] = useState("");
    // const [type, setType] = useState("");

    const allocateLocation = (event) => {
        event.preventDefault();
        if (dept === 'Melting') {
            axios.post("http://localhost/emp/allocateLocation", {
                token: token,
                dept: dept,
                subdept: dept,
                location: location
            },
                onSubmitClose());
            window.location.reload();
        } else if (dept === 'Fettling') {
            axios.post("http://localhost/emp/allocateLocation", {
                token: token,
                dept: dept,
                subdept: dept,
                location: location
            },
                onSubmitClose());
            window.location.reload();
        } else {
            axios.post("http://localhost/emp/allocateLocation", {
                token: token,
                dept: dept,
                subdept: subdept,
                location: location
            },
                onSubmitClose());
            window.location.reload();
        }
    };

    return (
        <>
            <form onSubmit={allocateLocation}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            required                            
                            label="Token"
                            fullWidth
                            value={view.token}
                        // onChange={(event) => { setToken(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required                            
                            label="Full Name"
                            fullWidth
                            value={view.name}
                        // onChange={(event) => { setName(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required                            
                            type="text"
                            label="Birth Date"
                            fullWidth
                            value={view.dob}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        // onChange={(event) => { setDOB(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField                            
                            label="Place of Birth"
                            fullWidth
                            value={view.dobplace}
                        // onChange={(event) => { setDobPlace(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required                            
                            label="Age"
                            fullWidth
                            value={view.age}
                        // onChange={(event) => { setAge(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup row aria-label="gender" name="gender" value={gender}
                        // onChange={(event) => { setGender(event.target.value) }} 
                        >
                            <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
                            <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
                        </RadioGroup>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <FormLabel component="legend">Marital Status</FormLabel>
                        <RadioGroup row aria-label="mStatus" name="mStatus" value={maritalstatus}
                        // onChange={(event) => { setMaritalStatus(event.target.value) }}
                        >
                            <FormControlLabel value="married" control={<Radio color="primary" />} label="Married" />
                            <FormControlLabel value="unmarried" control={<Radio color="primary" />} label="Unmarried" />
                            <FormControlLabel value="other" control={<Radio color="primary" />} label="Other" />
                        </RadioGroup>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormLabel component="legend" required>Medical Checkup</FormLabel>
                        <RadioGroup row aria-label="mCheckup" name="mCheckup" defaultValue="No" value={medicalcheckup}
                        // onChange={(event) => { setMedicalCheckup(event.target.value) }}
                        >
                            <FormControlLabel value="Yes" control={<Radio color="primary" />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio color="primary" />} label="No" />
                        </RadioGroup>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required                            
                            label="Present Address"
                            fullWidth
                            value={view.address}
                        // onChange={(event) => { setAddress(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField                            
                            label="Permanent Address"
                            fullWidth
                            value={view.paddress}
                        // onChange={(event) => { setPaddress(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required                            
                            label="City"
                            fullWidth
                            value={view.city}
                        // onChange={(event) => { setCity(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="state"
                            required
                            name="state"
                            label="State/Province/Region"
                            fullWidth
                            value={view.state}
                        // onChange={(event) => { setState(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required                            
                            label="Zip/Postal code"
                            fullWidth
                            value={view.zipcode}
                        // onChange={(event) => { setZipCode(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required                            
                            label="Country"
                            fullWidth
                            value={view.country}
                        // onChange={(event) => { setCountry(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required                            
                            label="Email"
                            fullWidth
                            value={view.email}
                        // onChange={(event) => { setEmail(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required                            
                            label="Mobile No."
                            fullWidth
                            value={view.mobile1}
                            inputProps={{ maxLength: 10 }}
                        // onChange={(event) => { setMobile1(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField                            
                            label="Alternate No."
                            fullWidth
                            value={view.mobile2}
                            inputProps={{ maxLength: 10 }}
                        // onChange={(event) => { setMobile2(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            label="Education"
                            type="text"
                            fullWidth
                            value={view.education}
                        // onChange={(event) => { setEducation(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            label="Aadhar No."
                            fullWidth
                            value={view.aadhar}
                        // onChange={(event) => { setAadhar(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            label="PAN No."
                            fullWidth
                            value={view.pan}
                        // onChange={(event) => { setPan(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            label="ESI No."
                            fullWidth
                            value={view.esi}
                        // onChange={(event) => { setESI(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            label="PF No."
                            fullWidth
                            value={view.pf}
                        // onChange={(event) => { setPF(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required                            
                            label="Type"
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            fullWidth
                            value={view.type}
                        // onChange={(event) => { setEndDate(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required                            
                            label="Join Date"
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            fullWidth
                            value={view.joindate}
                        // onChange={(event) => { setJoinDate(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required                            
                            label="End Date"
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            fullWidth
                            value={view.enddate}
                        // onChange={(event) => { setEndDate(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required                            
                            label="Role"
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            fullWidth
                            value={view.role}
                        // onChange={(event) => { setEndDate(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required                            
                            label="Contractor"
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            fullWidth
                            value={view.contractor}
                        // onChange={(event) => { setEndDate(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required                            
                            label="Department"
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            fullWidth
                            value={view.dept}
                        // onChange={(event) => { setEndDate(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            label="CTC"
                            type="text"
                            fullWidth
                            value={view.ctc}
                        // onChange={(event) => { setCTC(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormControl required className={classes.formControl}>
                            <InputLabel required htmlFor="age-native-required" className={classes.formControl}>Choose Department</InputLabel>
                            <Select
                                native
                                onChange={(event) => { setDepartment(event.target.value); }}
                                style={{ width: '100%' }}
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
                                Allocate
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </>
    );
}
