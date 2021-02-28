import { FLIP_CARD, MATCH_FOUND, UNFLIP_CARDS } from './actionTypes'

export const FlipCard = (cardId) => ({
  type: FLIP_CARD,
  payload: cardId
})

export const UnFlipCards = () => ({
  type: UNFLIP_CARDS,
})

export const MatchFound = () => ({
  type: MATCH_FOUND,
})