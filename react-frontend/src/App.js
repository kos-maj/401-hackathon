import React from 'react';
import {Button, CssBaseline, Box} from '@mui/material';

import TripList from './components/TripList';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />

      <Box sx={{m: '2em'}}>

        <h1>Trip Planner</h1>
        <TripList />
        <Button sx={{mt: '1em'}} variant='outlined' color='success'>Add New Trip</Button>

      </Box>
    </React.Fragment>
  )
}

export default App;
