import React from 'react';
import { useSelector } from "react-redux";
import { Typography, Grid, Box } from "@material-ui/core";
import Vehicles from './../components/Vehicles';
const Shortlist = props => {
    
    const {className} = props;
    
  const vehicles = useSelector(state => state.vehicles.data.byId);
  const hasData = Object.keys(vehicles).filter(el => vehicles[el].isShortlisted);

  return(
    <div className={className}>
    {hasData.length ?
      <Vehicles shortlistedOnly />
    : <Grid container spacing={3}>
    <Grid item xs={12}>
      <Box display="flex" justifyContent="center">
        <Typography variant="h6">No vehicles have been shortlisted yet!</Typography>
      </Box>
    </Grid>
    </Grid>
    }
    </div>
  )
}

export default Shortlist;
