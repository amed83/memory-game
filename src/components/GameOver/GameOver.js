import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAttempts } from '../../redux/selectors/score';
import { ResetGame } from '../../redux/actions/score';
import styles from './GameOver.module.css';

const GameOver = () => {

  const attempts = useSelector(getAttempts);
  const dispatch = useDispatch();


  return (
    <div className={styles.Container}>
      <p>You completed the game in {attempts} attempts.</p>
      <p><Link to="/play" onClick={() => dispatch(ResetGame())}>Play Again</Link></p>
    </div>
  )

}


export default GameOver;