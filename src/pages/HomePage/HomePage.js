import React from 'react';
import { StyledButton } from '../../shared/Button/Button';

const HomePage = () => {

  return (
    <div>
      <h2>Welcome to memory game</h2>
      <StyledButton to="/play">
        Play
      </StyledButton>
    </div>
  )

}


export default HomePage;