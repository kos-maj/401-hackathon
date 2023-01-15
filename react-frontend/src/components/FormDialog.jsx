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
  const [trip_name, setName] = React.useState(null);
  const [duration, setDuration] = React.useState(null);
  const [activity, setActivity] = React.useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setName(null);
    setDuration(null);
    setActivity(null);
  };

  const handleSubmit = () => {
    // TODO: POST request to API creating new trip
    if(trip_name !== null && duration !== null && activity !== null) {
        console.log(`new trip -> ${trip_name}, ${duration}, ${activity}`)
    }
  }

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
            onChange={e => { setName(e.target.value) }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="duration"
            label="Duration (Days)"
            fullWidth
            variant="standard"
            onChange={e => { setDuration(e.target.value) }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="activities"
            label="Activities"
            fullWidth
            variant="standard"
            onChange={e => { setActivity(e.target.value) }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => {
            handleSubmit(); 
            handleClose();
          }}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
