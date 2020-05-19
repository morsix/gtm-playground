import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {toggleShortlist} from "../../state/reducers/vehicles";
import { Grid, Box } from "@material-ui/core";

import ImgMediaCard from "./Cards/ImgMediaCard";


const Vehicles = (props) => {
  const {shortlistedOnly} = props;
  const dispatch = useDispatch();
  const vehicles = useSelector(state => state.vehicles.data.byId);

  const onShortlist = vehicleId =>{
    dispatch(toggleShortlist(vehicleId));
  }
  return (
    <Grid container spacing={3}>
      
      {shortlistedOnly ? 
        Object.keys(vehicles).filter(el => vehicles[el].isShortlisted).map((key) => (
          <Grid key={vehicles[key].vehicleId} item xs={12} md={4}>
            <Box display="flex" justifyContent="center">
              <ImgMediaCard {...vehicles[key]} onShortlist={onShortlist} />
            </Box>
          </Grid>
        ))
      
      :Object.keys(vehicles).map((key) => (
        <Grid key={vehicles[key].vehicleId} item xs={12} md={4}>
          <Box display="flex" justifyContent="center">
            <ImgMediaCard {...vehicles[key]} onShortlist={onShortlist} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Vehicles;
