import React from 'react';
import Axios from 'axios';

import {Divider, Box, List, ListItemButton, ListItemText} from '@mui/material';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';

export default function TripList(props) {
    const [selectedIndex, setselectedIndex] = React.useState(0);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (event, index) => {
      setOpen(true);
      setselectedIndex(index); 
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    // API Calls
    const axiosInstance = Axios.create({
      baseURL: 'http://127.0.0.1:8000/api'
    })
    // Make call to API 
    axiosInstance.get('/Trip').then(resp => {
      console.log(resp);
    })

    const trip_names = [
        'Trip 1 - Mexico',
        'Trip 2 - Hawaii',
        'Trip 3 - Bahamas'
    ]
    
    return (
        <Box sx={{ width: '100%', maxWidth: '50em'}}>
            <List component='nav'>
                <ListItemButton
                  onClick={(event) => handleClickOpen(event, 0)}
                >
                    <ListItemText primary={trip_names[0]} />
                </ListItemButton>

                <Divider /> 

                <ListItemButton
                  onClick={(event) => handleClickOpen(event, 1)}
                >
                    <ListItemText primary={trip_names[1]} />
                </ListItemButton>

                <Divider /> 

                <ListItemButton
                  onClick={(event) => handleClickOpen(event, 2)}
                >
                    <ListItemText primary={trip_names[2]} />
                </ListItemButton>
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
                    {trip_names[selectedIndex]}
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