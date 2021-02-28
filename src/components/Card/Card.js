import React from 'react';
import { StyledCard, StyledCardFront, StyledCardBack, StyledLogo } from './style';


const Card = ({ id, color, isFlipped, flipCard, matched }) => {
  return (
    <StyledCard onClick={() => flipCard(id)}>
      <StyledCardFront isFlipped={isFlipped}>
        <StyledLogo>
          M
        </StyledLogo >
      </StyledCardFront>
      <StyledCardBack
        isFlipped={isFlipped}
        color={color}
        matched={matched}
      >
      </StyledCardBack>
    </StyledCard>
  )
}

export default Card;
