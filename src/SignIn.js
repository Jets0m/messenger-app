import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

export default function SignIn(props) {
  const [open, setOpen] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setOpen(false);
  };

  return (
    <div className="app__signIn">
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          <WhatsAppIcon />
          <span>Welcome to RichChat</span>
        </DialogTitle>
        <form>
          <DialogContent>
            <DialogContentText>
              Enter your name to begin chatting.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
              required="required"
              onChange={(e) => props.onChange(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" type="submit">
              Enter
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
