import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    formControl: {
        width: '100%',
    }
}));

export default function ViewDetails(props) {
    const { onSubmitClose } = props;
    const classes = useStyles();

    const { token } = props;

    useEffect(() => {
        const { token } = props;
        axios.post('http://localhost:3000/emp/viewDetails', {
            token: token
        }).then((response) => {
            setName(response.data[0].name);
            setDOB(response.data[0].dob);
            setDobPlace(response.data[0].dobplace);
            setAge(response.data[0].age);
            setGender(response.data[0].gender);
            setMaritalStatus(response.data[0].maritalstatus);
            setAddress(response.data[0].address);
            setPaddress(response.data[0].paddress);
            setCity(response.data[0].city);
            setState(response.data[0].state);
            setZipCode(response.data[0].zipcode);
            setCountry(response.data[0].country);
            setEmail(response.data[0].email);
            setMobile1(response.data[0].mobile1);
            setMobile2(response.data[0].mobile2);
            setJoinDate(response.data[0].joindate);
            setEndDate(response.data[0].enddate);
            setType(response.data[0].type);
            setDepartment(response.data[0].dept);
            setContractor(response.data[0].contractor);
            setRole(response.data[0].role);
            setSubDept(response.data[0].subdept);
            setLocation(response.data[0].location);
            setMedicalCheckup(response.data[0].medicalcheckup);
            setEducation(response.data[0].education);
            setCTC(response.data[0].ctc);
            setAadhar(response.data[0].aadhar);
            setPan(response.data[0].pan);
            setESI(response.data[0].esi);
            setPF(response.data[0].pf);
        });
    }, [props]);

    const [name, setName] = useState("");
    const [dob, setDOB] = useState("");
    const [dobplace, setDobPlace] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState('male');
    const [maritalstatus, setMaritalStatus] = useState("married");
    const [address, setAddress] = useState("");
    const [paddress, setPaddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipCode] = useState("");
    const [country, setCountry] = useState("");
    const [email, setEmail] = useState("");
    const [mobile1, setMobile1] = useState("");
    const [mobile2, setMobile2] = useState("");
    const [contractor, setContractor] = useState("");
    const [dept, setDepartment] = useState("");
    const [joindate, setJoinDate] = useState("");
    const [enddate, setEndDate] = useState("");
    const [role, setRole] = useState("");
    const [type, setType] = useState("");
    const [subdept, setSubDept] = useState("");
    const [location, setLocation] = useState("");
    const [medicalcheckup, setMedicalCheckup] = useState("");
    const [education, setEducation] = useState("");
    const [ctc, setCTC] = useState("");
    const [aadhar, setAadhar] = useState("");
    const [pan, setPan] = useState("");
    const [esi, setESI] = useState("");
    const [pf, setPF] = useState("");

    const updateEmployee = (event) => {
        event.preventDefault();
        if (dept === 'Melting') {
            axios.post("http://localhost:3000/emp/allocateLocation", {
                token: token,
                role: role,
                dept: dept,
                subdept: dept,
                location: location
            },
                onSubmitClose());
            window.location.reload();
        } else if (dept === 'Fettling') {
            axios.post("http://localhost:3000/emp/allocateLocation", {
                token: token,
                role: role,
                dept: dept,
                subdept: dept,
                location: location
            },
                onSubmitClose());
            window.location.reload();
        } else {
            axios.post("http://localhost:3000/emp/allocateLocation", {
                token: token,
                role: role,
                dept: dept,
                subdept: subdept,
                location: location
            },
                onSubmitClose());
            window.location.reload();
        }
    };

    if (!token) {
        return "Loading...";
    }
    return (
        <>
            <form onSubmit={updateEmployee}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="token"
                            name="token"
                            label="Token"
                            fullWidth
                            value={token}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="name"
                            name="name"
                            label="Full Name"
                            fullWidth
                            value={name}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            id="dob"
                            name="dob"
                            type="text"
                            label="Birth Date"
                            fullWidth
                            value={dob}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            id="birthPlace"
                            name="birthPlace"
                            label="Place of Birth"
                            fullWidth
                            value={dobplace}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            id="age"
                            name="age"
                            label="Age"
                            fullWidth
                            value={age}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup row aria-label="gender" name="gender" value={gender} onChange={(event) => { setGender(event.target.value) }} >
                            <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
                            <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
                        </RadioGroup>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormLabel component="legend">Marital Status</FormLabel>
                        <RadioGroup row aria-label="mStatus" name="mStatus" value={maritalstatus}
                            onChange={(event) => { setMaritalStatus(event.target.value) }}
                        >
                            <FormControlLabel value="married" control={<Radio color="primary" />} label="Married" />
                            <FormControlLabel value="unmarried" control={<Radio color="primary" />} label="Unmarried" />
                            <FormControlLabel value="other" control={<Radio color="primary" />} label="Other" />
                        </RadioGroup>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormLabel component="legend" required>Medical Checkup</FormLabel>
                        <RadioGroup row aria-label="mCheckup" name="mCheckup" defaultValue="No" value={medicalcheckup} onChange={(event) => { setMedicalCheckup(event.target.value) }}>
                            <FormControlLabel value="Yes" control={<Radio color="primary" />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio color="primary" />} label="No" />
                        </RadioGroup>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="address"
                            name="address"
                            label="Present Address"
                            fullWidth
                            value={address}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="paddress"
                            name="paddress"
                            label="Permanent Address"
                            fullWidth
                            value={paddress}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="city"
                            name="city"
                            label="City"
                            fullWidth
                            value={city}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="state"
                            required
                            name="state"
                            label="State/Province/Region"
                            fullWidth
                            value={state}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="zip"
                            name="zip"
                            label="Zip / Postal code"
                            fullWidth
                            value={zipcode}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="country"
                            name="country"
                            label="Country"
                            fullWidth
                            value={country}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            id="email"
                            name="email"
                            label="Email"
                            fullWidth
                            value={email}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            id="mob1"
                            name="mob1"
                            label="Mobile No."
                            fullWidth
                            value={mobile1}
                            inputProps={{ maxLength: 10 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            id="mob2"
                            name="mob2"
                            label="Alternate No."
                            fullWidth
                            value={mobile2}
                            inputProps={{ maxLength: 10 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            label="Education"
                            type="text"
                            fullWidth
                            value={education}
                            onChange={(event) => { setEducation(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            label="Aadhar No."
                            fullWidth
                            value={aadhar}
                            onChange={(event) => { setAadhar(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            label="PAN No."
                            fullWidth
                            value={pan}
                            onChange={(event) => { setPan(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            label="ESI No."
                            fullWidth
                            value={esi}
                            onChange={(event) => { setESI(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            label="PF No."
                            fullWidth
                            value={pf}
                            onChange={(event) => { setPF(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            id="joindate"
                            name="joindate"
                            label="Join Date"
                            type="text"
                            fullWidth
                            value={joindate}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            id="enddate"
                            name="enddate"
                            label="End Date"
                            type="text"
                            fullWidth
                            value={enddate}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            id="type"
                            name="type"
                            label="Type"
                            type="text"
                            fullWidth
                            value={type}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            label="CTC"
                            type="text"
                            fullWidth
                            value={ctc}
                            onChange={(event) => { setCTC(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            id="contractor"
                            name="contractor"
                            label="Contractor"
                            type="text"
                            fullWidth
                            value={contractor}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            id="role"
                            name="role"
                            label="Role"
                            type="text"
                            fullWidth
                            value={role}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <span style={{ color: 'red' }}>Change if Required</span>
                    </Grid>
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
                                            <option value="PANEL NO-1 OPERATOR">PANEL NO-1 OPERATOR</option>
                                            <option value="PANEL NO-1 CO-OPERATOR">PANEL NO-1 CO-OPERATOR</option>
                                            <option value="PANEL NO-1 CHARGE COLLECTOR">PANEL NO-1 CHARGE COLLECTOR</option>
                                            <option value="PANEL NO-2 OPERATOR">PANEL NO-2 OPERATOR</option>
                                            <option value="PANEL NO-2 CO-OPERATOR">PANEL NO-2 CO-OPERATOR</option>
                                            <option value="PANEL NO-3 OPERATOR">PANEL NO-3 OPERATOR</option>
                                            <option value="PANEL NO-3 CO-OPERATOR">PANEL NO-3 CO-OPERATOR</option>
                                            <option value="SPECTRO COIN & TEST BAR SAMPLE">SPECTRO COIN & TEST BAR SAMPLE</option>
                                            <option value="CRANE OPERATOR">CRANE OPERATOR</option>
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
                                            <option value="Shell Machine No.05 Co-operator">Shell Machine No.05 Co-operator</option>
                                            <option value="Shell Machine No.06">Shell Machine No.06</option>
                                            <option value="Shell Machine No.07">Shell Machine No.07</option>
                                            <option value="Shell Machine No.08">Shell Machine No.08</option>
                                            <option value="Shell Machine No.09">Shell Machine No.09</option>
                                            <option value="Shell Machine No.10">Shell Machine No.10</option>
                                            <option value="Shell Machine No.11">Shell Machine No.11</option>
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
                                            <option value="JD Head Assembly Co-operator">JD Head Assembly Co-operator</option>
                                            <option value="Same Head">Same Head</option>
                                            <option value="Same KF Head 01">Same KF Head 01</option>
                                            <option value="Same KF Head Co-operator 01">Same KF Head Co-operator 01</option>
                                            <option value="Same KF Head Co-operator 02">Same KF Head Co-operator 02</option>
                                            <option value="TATA 4Sp block">TATA 4Sp block</option>
                                            <option value="Core Oven Operator">Core Oven Operator</option>
                                            <option value="Core Oven Co-operator 01">Core Oven Co-operator 01</option>
                                            <option value="Core Oven Co-operator 02">Core Oven Co-operator 02</option>
                                            <option value="Core Oven Co-operator 03">Core Oven Co-operator 03</option>
                                            <option value="Inspection">Inspection</option>
                                            <option value="Inspection Co-operator">Inspection Co-operator</option>
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
                                            <option value="Cold Box Machine No.01 Co-operator">Cold Box Machine No.01 Co-operator</option>
                                            <option value="Cold Box Machine No.02">Cold Box Machine No.02</option>
                                            <option value="Cold Box Machine No.02 Co-operator">Cold Box Machine No.02 Co-operator</option>
                                            <option value="Cold Box Machine No.02 Co-operator">Cold Box Machine No.02 Co-operator</option>
                                            <option value="Cold Box Machine No.03">Cold Box Machine No.03</option>
                                            <option value="Cold Box Machine No.03 Co-operator">Cold Box Machine No.03 Co-operator</option>
                                            <option value="Cold Box Machine No.04">Cold Box Machine No.04</option>
                                            <option value="Cold Box Machine No.04 Co-operator">Cold Box Machine No.04 Co-operator</option>
                                            <option value="Cold Box Machine No.05">Cold Box Machine No.05</option>
                                            <option value="Cold Box Machine No.05 Co-operator">Cold Box Machine No.05 Co-operator</option>
                                            <option value="Cold Box Machine No.05 Co-operator">Cold Box Machine No.05 Co-operator</option>
                                            <option value="Cold Box Machine No.06">Cold Box Machine No.06</option>
                                            <option value="Cold Box Machine No.06 Co-operator">Cold Box Machine No.06 Co-operator</option>
                                            <option value="Cold Box Machine No.06 Co-operator">Cold Box Machine No.06 Co-operator</option>
                                            <option value="Cold Box Machine No.07">Cold Box Machine No.07</option>
                                            <option value="Cold Box Machine No.07 Co-operator">Cold Box Machine No.07 Co-operator</option>
                                            <option value="Cold Box Machine No.07 Co-operator">Cold Box Machine No.07 Co-operator</option>
                                            <option value="Cold Box Machine No.08">Cold Box Machine No.08</option>
                                            <option value="Cold Box Machine No.08 Co-operator">Cold Box Machine No.08 Co-operator</option>
                                            <option value="Cold Box Machine No.09">Cold Box Machine No.09</option>
                                            <option value="Cold Box Machine No.10">Cold Box Machine No.10</option>
                                            <option value="Cold Box Machine No.11">Cold Box Machine No.11</option>
                                            <option value="Cold Box Machine No.11 Co-operator">Cold Box Machine No.11 Co-operator</option>
                                            <option value="Sand Feeding">Sand Feeding</option>
                                            <option value="Sand Feeding">Sand Feeding</option>
                                            <option value="Mixer 900">Mixer 900</option>
                                            <option value="Mixer 450">Mixer 450</option>
                                            <option value="Painting Skilled Operator">Painting Skilled Operator</option>
                                            <option value="Painting Operator 900">Painting Operator 900</option>
                                            <option value="Painting Operator 900">Painting Operator 900</option>
                                            <option value="Painting Operator 900">Painting Operator 900</option>
                                            <option value="Painting Skilled Operator Arpa 450">Painting Skilled Operator Arpa 450</option>
                                            <option value="Painting Operator Arpa 450">Painting Operator Arpa 450</option>
                                            <option value="Skilled Inspector Arpa 450">Skilled Inspector Arpa 450</option>
                                            <option value="Oven Skilled Operator">Oven Skilled Operator</option>
                                            <option value="Oven Co-operator">Oven Co-operator</option>
                                            <option value="Core Box Cleaning & Vent Changing">Core Box Cleaning & Vent Changing</option>
                                            <option value="Inspection Arpa 900">Inspection Arpa 900</option>
                                            <option value="Inspection Co-operator Arpa 900">Inspection Co-operator Arpa 900</option>
                                            <option value="Assembly Operator 450">Assembly Operator 450</option>
                                            <option value="Assembly 450 Co-operator">Assembly 450 Co-operator</option>
                                            <option value="Tool Change">Tool Change</option>
                                            <option value="Venting Skill Operator">Venting Skill Operator</option>
                                            <option value="Venting Skill Co-operator">Venting Skill Co-operator</option>
                                            <option value="Venting Skill Co-operator">Venting Skill Co-operator</option>
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
                                            <option value="COPE M/C OPERATOR">COPE M/C OPERATOR</option>
                                            <option value="M/C CO-OPERATOR(AIR)">M/C CO-OPERATOR(AIR)</option>
                                            <option value="M/C CO-OPERATOR">M/C CO-OPERATOR</option>
                                            <option value="DRAG M/C OPERATOR">DRAG M/C OPERATOR</option>
                                            <option value="M/C CO-OPERATOR(AIR)">M/C CO-OPERATOR(AIR)</option>
                                            <option value="M/C CO-OPERATOR">M/C CO-OPERATOR</option>
                                            <option value="DRAG MOULD PAINTING OP.">DRAG MOULD PAINTING OP.</option>
                                            <option value="CORE SETTING OPERATOR 01">CORE SETTING OPERATOR 01</option>
                                            <option value="CORE SETTING OPERATOR 02">CORE SETTING OPERATOR 02</option>
                                            <option value="CORE TRANFER FIXTURE OP.">CORE TRANFER FIXTURE OP.</option>
                                            <option value="BOX CLOSING OPERATOR">BOX CLOSING OPERATOR</option>
                                            <option value="VENTING OPERATOR 01">VENTING OPERATOR 01</option>
                                            <option value="VENTING OPERATOR 02">VENTING OPERATOR 02</option>
                                            <option value="COPE BOX PREPRATION OP.">COPE BOX PREPRATION OP.</option>
                                            <option value="CLAMPING OPERATOR 01">CLAMPING OPERATOR 01</option>
                                            <option value="CLAMPING OPERATOR 02">CLAMPING OPERATOR 02</option>
                                            <option value="MOLD BOX TRANSFER OP.">MOLD BOX TRANSFER OP.</option>
                                            <option value="CLAMP & PIN REMOVING OP.">CLAMP & PIN REMOVING OP.</option>
                                            <option value="POURING CRANE OPERATOR">POURING CRANE OPERATOR</option>
                                            <option value="POURING OPERATOR">POURING OPERATOR</option>
                                            <option value="K-OUT CRANE OPERATOR">K-OUT CRANE OPERATOR</option>
                                            <option value="K-OUT CRANE CO-OPERATOR">K-OUT CRANE CO-OPERATOR</option>
                                            <option value="K-OUT OPERATOR">K-OUT OPERATOR</option>
                                            <option value="CASTING TRANSFER OP.">CASTING TRANSFER OP.</option>
                                            <option value="EMPTY BOX TRASFER OP.">EMPTY BOX TRASFER OP.</option>
                                            <option value="SAND PLANT OPERATOR">SAND PLANT OPERATOR</option>
                                            <option value="SAND PLANT CO-OPERATOR">SAND PLANT CO-OPERATOR</option>
                                            <option value="NEW SAND ADD OPERATOR">NEW SAND ADD OPERATOR</option>
                                            <option value="COMPACTIBILITY CHECKING OP.">COMPACTIBILITY CHECKING OP.</option>
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
                                            <option value="COPE M/C OPERATOR">COPE M/C OPERATOR</option>
                                            <option value="COPE BOX LOADING OP.">COPE BOX LOADING OP.</option>
                                            <option value="DRAG M/C OPERATOR">DRAG M/C OPERATOR</option>
                                            <option value="DRAG BOX LOADING OP.">DRAG BOX LOADING OP.</option>
                                            <option value="DRAG BOX UNLOADING OP">DRAG BOX UNLOADING OP</option>
                                            <option value="CORE TRANFER FIXTURE OP.">CORE TRANFER FIXTURE OP.</option>
                                            <option value="CORE TRANFER FIXTURE CO-OP.">CORE TRANFER FIXTURE CO-OP.</option>
                                            <option value="CORE SETTING OPERATOR">CORE SETTING OPERATOR</option>
                                            <option value="CLAMPING OPERATOR 01">CLAMPING OPERATOR 01</option>
                                            <option value="CLAMPING OPERATOR 02">CLAMPING OPERATOR 02</option>
                                            <option value="DRAG MOULD VENTING OP.">DRAG MOULD VENTING OP.</option>
                                            <option value="VENTING OPERATOR 01">VENTING OPERATOR 01</option>
                                            <option value="VENTING OPERATOR 02">VENTING OPERATOR 02</option>
                                            <option value="BOX CLOSING OPERATOR">BOX CLOSING OPERATOR</option>
                                            <option value="POURING CRANE OPERATOR">POURING CRANE OPERATOR</option>
                                            <option value="POURING OPERATOR">POURING OPERATOR</option>
                                            <option value="K-OUT OPERATOR">K-OUT OPERATOR</option>
                                            <option value="CASTING TRANSFER OP.">CASTING TRANSFER OP.</option>
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
                                            <option value="COPE M/C OPERATOR">COPE M/C OPERATOR</option>
                                            <option value="COPE M/C CO-OPERATOR 01">COPE M/C CO-OPERATOR 01</option>
                                            <option value="COPE M/C CO-OPERATOR 02">COPE M/C CO-OPERATOR 02</option>
                                            <option value="DRAG M/C CO-OPERATOR">DRAG M/C CO-OPERATOR</option>
                                            <option value="EMPTY PALLET TRASFER OP.">EMPTY PALLET TRASFER OP.</option>
                                            <option value="DRAG BOX VENTING OP.">DRAG BOX VENTING OP.</option>
                                            <option value="DRAG CORE SETTING OP.">DRAG CORE SETTING OP.</option>
                                            <option value="COPE CORE SETTING OP.">COPE CORE SETTING OP.</option>
                                            <option value="VENTING OPERATOR 01">VENTING OPERATOR 01</option>
                                            <option value="VENTING OPERATOR 02">VENTING OPERATOR 02</option>
                                            <option value="VENTING OPERATOR 03">VENTING OPERATOR 03</option>
                                            <option value="BOX CLOSING OPERATOR">BOX CLOSING OPERATOR</option>
                                            <option value="BOX CLOSING CO-OPERATOR">BOX CLOSING CO-OPERATOR</option>
                                            <option value="CLAMPING OPERATOR 01">CLAMPING OPERATOR 01</option>
                                            <option value="CLAMPING OPERATOR 02">CLAMPING OPERATOR 02</option>
                                            <option value="MOLD BOX TRANSFER OP.">MOLD BOX TRANSFER OP.</option>
                                            <option value="POURING CRANE OPERATOR">POURING CRANE OPERATOR</option>
                                            <option value="POURING OPERATOR">POURING OPERATOR</option>
                                            <option value="K-OUT OPERATOR">K-OUT OPERATOR</option>
                                            <option value="K-OUT CO-OPERATOR">K-OUT CO-OPERATOR</option>
                                            <option value="SAND PLANT OPERATOR">SAND PLANT OPERATOR</option>
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
                                Update
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </>
    );
}
