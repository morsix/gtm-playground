import React from 'react';
import Vehicles from './../components/Vehicles';

const Home = props => {

  const {className} = props;

  return(
    <div className={className}>
      <Vehicles />
    </div>
  )
}

export default Home;
