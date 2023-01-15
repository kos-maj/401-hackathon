import React, {useState, useEffect} from 'react';
import {Divider, Box, List, ListItemButton, ListItemText, IconButton, ListItem } from '@mui/material';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


export default function FriendList(props) {
    const FRIEND_ENDPOINT = 'http://127.0.0.1:8000/api/Friend/';
    const [selectedIndex, setselectedIndex] = useState(0);
    const [open, setOpen] = useState(false);
    const [friends, setFriends] = useState([]);

    const handleClickOpen = (event, index) => {
      setOpen(true);
      setselectedIndex(index); 
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleClickDelete = (event, friend_id) => {
      // Make request to API to delete friend with current ID
      fetch(`${FRIEND_ENDPOINT}${friend_id}/`, { method: 'DELETE' });
    }

    // Fetch friend data from API
    useEffect(() => {
      fetch(FRIEND_ENDPOINT, {
        headers: { "Accept": "application/json" },
        method: "GET"
      }).then(response => response.json()).then(friendsData => {
        setFriends(friendsData);
      });
    })

    // console.log(friends); 

    return (
        <Box sx={{ width: '100%', maxWidth: '50em'}}>
            <h3>Friend List</h3>
            <List component='nav'>
                {friends.map((friend, index) => {
                    return (
                      <React.Fragment>
                      <ListItem
                        secondaryAction={
                          <IconButton edge='end' onClick={(event) => handleClickDelete(event, friend.FID)}>
                            <DeleteIcon />
                          </IconButton>
                        }
                        disablePadding
                      >
                          <ListItemButton
                              onClick={(event) => handleClickOpen(event, index)}
                          >
                              <ListItemText primary={friend.friend_name} />
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
                    Friend Name: {friends.length ? friends[selectedIndex]['friend_name'] : ''}
                  </DialogContentText>
                  <DialogContentText id="alert-dialog-description">
                    Friend Email: {friends.length ? friends[selectedIndex]['friend_email'] : ''}
                  </DialogContentText>
                  <DialogContentText id="alert-dialog-description">
                    Friend Age: {friends.length ? friends[selectedIndex]['friend_age'] : ''}
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