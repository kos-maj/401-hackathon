import React from 'react';
import {CssBaseline, Box} from '@mui/material';

import TripList  from './components/TripList';
import FriendList  from './components/FriendList';
import FormDialog from './components/FormDialog';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />

      <Box sx={{m: '2em'}}>

        <h1>Trip Planner</h1>
        <TripList />
        <FormDialog />
        <FriendList />

      </Box>
    </React.Fragment>
  )
}

export default App;
