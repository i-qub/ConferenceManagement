import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
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

    const [verified, setVerified] = useState('');

    const { token } = props;

    useEffect(() => {
        const { token } = props;
        axios.post('http://localhost:3000/emp/viewDetails', {
            token: token
        }).then((response) => {
            setVerified(response.data[0].verified);
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

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const [rejectcmt, setRejectCmt] = useState("");

    const handleReject = (event) => {
        event.preventDefault();
        axios.post("http://localhost:3000/emp/rejectVerification", {
            token: token,
            rejectcmt: rejectcmt
        },
            setOpen(false),
            onSubmitClose());
        window.location.reload();
    };

    const handleClose = () => {
        setOpen(false);
    };

    const verifyEmployee = (event) => {
        event.preventDefault();
        if (token !== '') {
            axios.post("http://localhost:3000/emp/verifyEmployee", {
                token: token,
                name: name,
                dob: dob,
                dobplace: dobplace,
                age: age,
                gender: gender,
                maritalstatus: maritalstatus,
                address: address,
                paddress: paddress,
                city: city,
                state: state,
                zipcode: zipcode,
                country: country,
                email: email,
                mobile1: mobile1,
                mobile2: mobile2,
                contractor: contractor,
                dept: dept,
                joindate: joindate,
                enddate: enddate,
                role: role,
                type: type,
                medicalcheckup: medicalcheckup,
                education: education,
                ctc: ctc,
                aadhar: aadhar,
                pan: pan,
                esi: esi,
                pf: pf,
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
            <form onSubmit={verifyEmployee}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            disabled
                            label="Token"
                            fullWidth
                            value={token}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            label="Full Name"
                            fullWidth
                            value={name}
                            onChange={(event) => { setName(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            type="text"
                            label="Birth Date"
                            fullWidth
                            value={dob}
                            onChange={(event) => { setDOB(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            label="Place of Birth"
                            fullWidth
                            value={dobplace}
                            onChange={(event) => { setDobPlace(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            label="Age"
                            fullWidth
                            value={age}
                            onChange={(event) => { setAge(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup row aria-label="gender" name="gender" value={gender} onChange={(event) => { setGender(event.target.value) }} >
                            <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
                            <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
                        </RadioGroup>
                    </Grid>
                    <Grid item xs={12} sm={5}>
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
                            label="Present Address"
                            fullWidth
                            value={address}
                            onChange={(event) => { setAddress(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Permanent Address"
                            fullWidth
                            value={paddress}
                            onChange={(event) => { setPaddress(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            label="City"
                            fullWidth
                            value={city}
                            onChange={(event) => { setCity(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="state"
                            required
                            name="state"
                            label="State/Province/Region"
                            fullWidth
                            value={state}
                            onChange={(event) => { setState(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            label="Zip / Postal code"
                            fullWidth
                            value={zipcode}
                            onChange={(event) => { setZipCode(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            label="Country"
                            fullWidth
                            value={country}
                            onChange={(event) => { setCountry(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            label="Email"
                            fullWidth
                            value={email}
                            onChange={(event) => { setEmail(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            label="Mobile No."
                            fullWidth
                            value={mobile1}
                            inputProps={{ maxLength: 10 }}
                            onChange={(event) => { setMobile1(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            label="Alternate No."
                            fullWidth
                            value={mobile2}
                            inputProps={{ maxLength: 10 }}
                            onChange={(event) => { setMobile2(event.target.value); }}
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
                            label="Join Date"
                            type="text"
                            fullWidth
                            value={joindate}
                            onChange={(event) => { setJoinDate(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            label="End Date"
                            type="text"
                            fullWidth
                            value={enddate}
                            onChange={(event) => { setEndDate(event.target.value); }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormControl required className={classes.formControl}>
                            <InputLabel htmlFor="age-native-required" required className={classes.formControl}>Type</InputLabel>
                            <Select
                                native
                                onChange={(event) => { setType(event.target.value); }}
                                style={{ width: '100%' }}
                                value={type}
                            >
                                <option aria-label="None" value="" />
                                <option value="Permanent">Permanent</option>
                                <option value="CL">CL</option>
                                <option value="IT">IT</option>
                                <option value="Piece Rate">Piece Rate</option>
                            </Select>
                        </FormControl>
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
                        <FormControl required className={classes.formControl}>
                            <InputLabel htmlFor="age-native-required" required className={classes.formControl}>Department</InputLabel>
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
                                <option value="HR">HR</option>
                            </Select>
                        </FormControl>
                    </Grid>
                    {(() => {
                        if (verified === 'YES') {
                            return (
                                <>
                                    <Grid item xs={12} sm={4}>
                                        <TextField
                                            required
                                            id="subdept"
                                            name="subdept"
                                            label="Sub Dept"
                                            type="text"
                                            fullWidth
                                            value={subdept}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <TextField
                                            required
                                            id="location"
                                            name="location"
                                            label="Location"
                                            type="text"
                                            fullWidth
                                            value={location}
                                        />
                                    </Grid>
                                </>
                            )
                        }
                    })()}
                    <Grid item xs={12} sm={4}>
                        <FormControl required className={classes.formControl}>
                            <InputLabel htmlFor="age-native-required" required className={classes.formControl}>Contractor</InputLabel>
                            <Select
                                native
                                value={contractor}
                                onChange={(event) => { setContractor(event.target.value); }}
                                style={{ width: '100%' }}
                            >
                                <option aria-label="None" value="" />
                                <option value="Permanent">Permanent</option>
                                <option value="OPTIGMA">OPTIGMA</option>
                                <option value="SBBMT">SBBMT</option>
                                <option value="INDUMATI">INDUMATI</option>
                                <option value="SRUJAN">SRUJAN</option>
                                <option value="NEW GANESH">NEW GANESH</option>
                                <option value="SHREE SERVICES">SHREE SERVICES</option>
                                <option value="DMC NEEM">DMC NEEM</option>
                                <option value="MPTA NEEM">MPTA NEEM</option>
                                <option value="YIT NEEM">YIT NEEM</option>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormControl required className={classes.formControl}>
                            <InputLabel htmlFor="age-native-required" required className={classes.formControl}>Role</InputLabel>
                            <Select
                                native
                                value={role}
                                onChange={(event) => { setRole(event.target.value); }}
                                style={{ width: '100%' }}
                            >
                                <option aria-label="None" value="" />
                                <option value="hr">HR</option>
                                <option value="hod">HOD</option>
                                <option value="employee">Employee</option>
                            </Select>
                        </FormControl>
                    </Grid>
                    {(() => {
                        if (verified === 'NO') {
                            return (
                                <>
                                    <Grid spacing={2}>
                                        <Grid item xs={12} sm={4}>
                                            <Button
                                                type="submit"
                                                style={{
                                                    fontSize: "18px",
                                                }}
                                                color="primary"
                                                variant="contained"
                                            >
                                                Verify
                                            </Button>
                                        </Grid>
                                    </Grid>
                                    <Grid spacing={2} style={{ paddingLeft: '10px' }}>
                                        <Grid item xs={12} sm={4}>
                                            <Button
                                                style={{
                                                    fontSize: "18px",
                                                }}
                                                color="secondary"
                                                variant="contained"
                                                onClick={handleClickOpen}
                                            >
                                                Reject
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </>
                            )
                        }
                    })()}
                </Grid>
            </form>
            <div>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Reject Comment of {name}</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="rejectcmt"
                            label="Reject Comment"
                            type="text"
                            fullWidth
                            onChange={(event) => { setRejectCmt(event.target.value); }}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleReject} color="primary">
                            Reject
                        </Button>
                        <Button onClick={handleClose} color="secondary">
                            Cancle
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    );
}
