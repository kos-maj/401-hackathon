import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button sx={{mt: '1em'}} variant='outlined' color='success' onClick={handleClickOpen}>
        Add New Trip
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Trip</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a new trip please fill out the fields displayed below.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Trip Name"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="duration"
            label="Duration (Days)"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="activities"
            label="Activities"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
