import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import { Button } from "@material-ui/core";
import React from "react";

export default function RegiPopup(props) {
  const { children, openRegiPopup, onClose } = props;
  return (
    <Dialog open={openRegiPopup} maxWidth="md">
      <DialogTitle>
        <div style={{ display: "flex" }}>
          <div style={{ flexGrow: 1, fontWeight: "bold", paddingTop: "5px" }}>
            Add  Meeting
          </div>
          <Button
            style={{
              fontSize: "18px",
              minWidth: "10px",
              maxHeight: "40px",
            }}
            color="secondary"
            variant="contained"
            onClick={onClose}
          >
            <b> X </b>
          </Button>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}
