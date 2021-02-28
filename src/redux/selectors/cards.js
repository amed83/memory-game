import { createSelector } from 'reselect';

export const getCards = createSelector(
  state => state.dashboard.cards,
  cards => cards
)

export const getFlippedCards = createSelector(
  getCards,
  cards => cards.filter(card => card.isFlipped && !card.matchFound)
)

export const getCardsMatched = createSelector(
  getCards,
  cards => cards.filter(card => card.matchFound)
)

export const getNumberOfCards = createSelector(
  getCards,
  cards => cards.length
)