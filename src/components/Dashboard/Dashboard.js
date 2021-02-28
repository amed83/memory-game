import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getCards, getFlippedCards, getCardsMatched } from '../../redux/selectors/cards';
import Card from '../Card/Card';
import { FlipCard, MatchFound, UnFlipCards } from '../../redux/actions/cards';
import { IncrementAttempts } from '../../redux/actions/score'
import styles from './Dashboard.module.css';
import { useHistory } from "react-router-dom";


const Dashboard = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const cards = useSelector(getCards);
  const flippedCards = useSelector(getFlippedCards);
  const matchedCards = useSelector(getCardsMatched);

  const flipCardHelper = (cardId) => {
    if (flippedCards.length >= 2 || matchedCards.some(card => card.id === cardId)) {
      return
    }
    return dispatch(FlipCard(cardId));
  }

  useEffect(() => {
    if (flippedCards.length > 1) {
      dispatch(IncrementAttempts())
      if (flippedCards[0].color === flippedCards[1].color) {
        return dispatch(MatchFound())
      }
      setTimeout(() => {
        dispatch(UnFlipCards())
      }, 1500)
    }

  }, [flippedCards.length])

  useEffect(() => {
    if (matchedCards.length === cards.length) {
      setTimeout(() => {
        history.push('/game-over');
      }, 1000)
    }
  }, [matchedCards.length])


  return (
    <div className={styles.Container}>
      {cards.map(card => {
        return (
          <Card
            id={card.id}
            color={card.color}
            isFlipped={card.isFlipped}
            matched={card.matchFound}
            flipCard={flipCardHelper}
            key={card.id}
          />
        )
      })}
    </div>
  )
}


export default Dashboard