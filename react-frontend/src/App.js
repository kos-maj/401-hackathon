import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import Button from '@mui/material/Button';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      {
        <React.Fragment>
          <h1>Trip Planner</h1>
          <Button variant='outlined' color='success'>Add New Trip</Button>
        </React.Fragment>
      }
    </React.Fragment>
  )
}

export default App;
