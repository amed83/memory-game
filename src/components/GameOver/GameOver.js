import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAttempts } from '../../redux/selectors/score';
import { getNumberOfCards } from '../../redux/selectors/cards'
import { ResetGame } from '../../redux/actions/score';
import { StyledButton } from '../../shared/Button/Button';

const GameOver = () => {
  const attempts = useSelector(getAttempts);
  const dispatch = useDispatch();
  const numberOfCards = useSelector(getNumberOfCards);

  const getMessage = () => {
    if (attempts === numberOfCards / 2) {
      return <p>GREAT !! You completed the game with the smallest number of attempts</p>
    }
    return <p>You completed the game with {attempts} attempts.</p>
  }

  return (
    <div>
      {getMessage()}
      <StyledButton to="/play"
        onClick={() => dispatch(ResetGame())}
      >
        Play Again
      </StyledButton>
    </div>
  )

}


export default GameOver;