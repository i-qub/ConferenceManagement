import './App.css';
import React, { useState } from "react";
import axios from "axios";
import { TextField, Button } from "@material-ui/core";
import { setUserSession } from './Common';

function Location(props) {
    const [token, setToken] = useState('');

    // handle button click of punching form
    const location = () => {
        axios.post('http://localhost:9000/punch/punchin', {
            token: token
        }).then(response => {
            setUserSession(response.data.userData);
            props.history.push('/locationView');
        })
    }

    // handle button click of leave form
    // const leave = () => {
    //     axios.post('http://localhost:1020/leaveApp', {
    //         token: token
    //     }).then(response => {
    //         setUserSession(response.data.userData);
    //         props.history.push('/leaveView');
    //     })
    // }
    return (
        <div className="App">
            <header className="App-header">
                <h3>Employee Punching Demo</h3>
                <label>Enter Token No.</label>
                <TextField
                    required
                    style={{ backgroundColor: 'rgb(255, 255, 255)' }}
                    onChange={(event) => { setToken(event.target.value); }}
                    margin="normal"
                    type="number"
                />
                <Button
                    disabled={
                        token.length === 0
                    }
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={location}
                >
                    Submit
                </Button>
                {/* <br></br>
                <br></br>
                <h3>Employee Leave Application</h3>
                <label>Enter Token No.</label>
                <TextField
                    required
                    style={{ backgroundColor: 'rgb(255, 255, 255)' }}
                    onChange={(event) => { setToken(event.target.value); }}
                    margin="normal"
                    type="number"
                />
                <Button
                    disabled={
                        token.length === 0
                    }
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={leave}
                >
                    Submit
                </Button> */}
            </header>
        </div>
    );
}

export default Location;