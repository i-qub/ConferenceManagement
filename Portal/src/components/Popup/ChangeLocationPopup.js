import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import { Button } from "@material-ui/core";
import React from 'react';

export default function ChangeLocationPopup(props) {
    const { children, name, openChangeLocationPopup, onClose } = props;
    return (
        <Dialog open={openChangeLocationPopup} maxWidth="lg">
            <DialogTitle>
                <div style={{ display: 'flex' }}>
                    <div style={{ flexGrow: 1, fontWeight: 'bold', paddingTop: '5px' }}>Change Location of {name}</div>
                    <Button
                        style={{
                            fontSize: "18px",
                            minWidth: "10px",
                            maxHeight: "40px"
                        }}
                        color="secondary"
                        variant="contained"
                        onClick={onClose}
                    >
                        <b> X </b>
                    </Button>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    )
}
