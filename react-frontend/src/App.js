import React from 'react';
import {Button, CssBaseline, Box, Alert} from '@mui/material';

import TripList from './components/TripList';
import AlertDialog from './components/Popup';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />

      <Box sx={{m: '2em'}}>

        <h1>Trip Planner</h1>
        <TripList />
        <AlertDialog/>
        <Button sx={{mt: '1em'}} variant='outlined' color='success'>Add New Trip</Button>

      </Box>
    </React.Fragment>
  )
}

export default App;
