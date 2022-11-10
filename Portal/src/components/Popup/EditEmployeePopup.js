import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import { Button } from "@material-ui/core";
import React from "react";

export default function EditEmployeePopup(props) {
  const { children, onClose, openEditEmployeesPopup } = props;
  return (
    <Dialog open={openEditEmployeesPopup} maxWidth="lg">
      <DialogTitle>
        <div style={{ display: "flex" }}>
          <div style={{ flexGrow: 1, fontWeight: "bold", paddingTop: "5px" }}>
            Employee List
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
