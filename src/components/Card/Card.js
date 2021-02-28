import React from 'react';
import { StyledCard, StyledCardFront, StyledCardBack } from './style';

const Card = ({ id, name, isFlipped, flipCard }) => {
  return (
    <StyledCard onClick={() => flipCard(id)}>
      <StyledCardFront isFlipped={isFlipped}>
      </StyledCardFront>
      <StyledCardBack isFlipped={isFlipped} color={name}>
      </StyledCardBack>
    </StyledCard>
  )
}

export default Card;
