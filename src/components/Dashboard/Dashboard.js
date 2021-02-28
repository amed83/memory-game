import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { getCards, getFlippedCards, getCardsMatched } from '../../redux/selectors/cards';
import Card from '../Card/Card';
import { FlipCard, MatchFound, UnFlipCards } from '../../redux/actions/cards';
import { IncrementAttempts } from '../../redux/actions/score'
import './Dashboard.css';


const Dashboard = () => {
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
      if (flippedCards[0].name === flippedCards[1].name) {
        return dispatch(MatchFound())
      }
      setTimeout(() => {
        dispatch(UnFlipCards())
      }, 1500)
    }

  }, [flippedCards.length])


  return (
    <div className="Container">
      {cards.map(card => {
        return (
          <Card
            id={card.id}
            name={card.name}
            isFlipped={card.isFlipped}
            flipCard={flipCardHelper}
            key={card.id}
          />
        )
      })}
    </div>
  )
}


export default Dashboard