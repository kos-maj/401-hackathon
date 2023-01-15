import React, {useState, useEffect} from 'react';
import {Divider, Box, List, ListItemButton, ListItemText, IconButton, ListItem } from '@mui/material';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TripList(props) {
    const [selectedIndex, setselectedIndex] = useState(0);
    const [open, setOpen] = useState(false);
    const [trips, setTrips] = useState([]);

    const handleClickOpen = (event, index) => {
      setOpen(true);
      setselectedIndex(index); 
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleClickDelete = (event, trip_id) => {
      // Make request to API to delete trip with current ID
      console.log(`Delete pressed on trip with id ${trip_id}`);
    }

    // Make call to API to fetch trip data
    useEffect(() => {
      fetch('http://127.0.0.1:8000/api/Trip/', {
        headers: { "Accept": "application/json" },
        method: "GET"
      }).then(response => response.json()).then(tripsData => {
        setTrips(tripsData);
      });
    })

    return (
        <Box sx={{ width: '100%', maxWidth: '50em'}}>
            <List component='nav'>
                {trips.map((trip, index) => {
                    return (
                      <React.Fragment>
                      <ListItem
                        secondaryAction={
                          <IconButton edge='end' onClick={(event) => handleClickDelete(event, trip.TID)}>
                            <DeleteIcon />
                          </IconButton>
                        }
                        disablePadding
                      >
                          <ListItemButton
                              onClick={(event) => handleClickOpen(event, index)}
                          >
                              <ListItemText primary={trip.trip_name} />
                          </ListItemButton>
                      </ListItem>

                      <Divider />
                      </React.Fragment>
                    )
                  })
                }
            </List>

            <div>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Details"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    {trips.length ? trips[selectedIndex]['trip_name'] : ''}
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Okay</Button>
                </DialogActions>
              </Dialog>
            </div>

        </Box>

        
    )
}