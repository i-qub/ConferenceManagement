import React from 'react';
import './App.css';
import { getUser } from './Common';
import { Button } from "@material-ui/core";

export default function LocationView(props) {
    const location = getUser();
    const back = () => {
        props.history.push('/');
    }
    return (
        <div className="App">
            <header className="App-header">
                <h2>Thank You {location[0].name}</h2>
                <span>Your Work Location Mentioned Below</span>
                <br></br>
                <div style={{ textAlign: "left" }}>
                    <b>Token:</b> {location[0].token}
                    <br></br>
                    <b>Name:</b> {location[0].name}
                    <br></br>
                    <b>Date:</b> {location[0].punchdate}
                    <br></br>
                    <b>Time:</b> {location[0].punchin}
                    <br></br>
                    <b>Shift:</b> {location[0].shift}
                    <br></br>
                    <b>Department:</b> {location[0].dept}
                    <br></br>
                    <b>Sub Department:</b> {location[0].subdept}
                    <br></br>
                    <b>Location:</b> {location[0].location}
                </div>
                <br></br>
                <div>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        onClick={back}
                    >
                        Another Token
                    </Button>
                </div>
            </header>
        </div>
    )
}
