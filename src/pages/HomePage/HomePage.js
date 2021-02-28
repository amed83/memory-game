import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {

  return (
    <div>
      <h2>Welcome to memory game</h2>
      <Link to="/play">
        Play
      </Link>
    </div>
  )

}


export default HomePage;