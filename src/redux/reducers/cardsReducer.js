import cards from '../../data/cards.json';
import { FLIP_CARD, MATCH_FOUND, UNFLIP_CARDS } from '../actions/actionTypes';

const loadCards = cards.data.flatMap((card => {
  return [card, { ...card, id: `${card.id}_match` }]
}))



export const INITIAL_STATE = { cards: [...loadCards], matchesFound: 0 }

const CardsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FLIP_CARD:
      return {
        ...state,
        cards: state.cards.map((card => {
          if (card.id === action.payload) {
            return {
              ...card,
              isFlipped: !card.isFlipped
            }
          }
          return {
            ...card
          }
        }))
      };
    case UNFLIP_CARDS: {
      return {
        ...state,
        cards: state.cards.map((card) => {
          if (card.isFlipped && !card.matchFound) {
            return {
              ...card,
              isFlipped: false
            }
          }
          return {
            ...card
          }
        })
      }
    }
    case MATCH_FOUND:
      return {
        ...state,
        matchesFound: state.matchesFound + 1,
        cards: state.cards.map((card) => {
          if (card.isFlipped) {
            return {
              ...card,
              matchFound: true,
            }
          }
          return {
            ...card
          }
        })
      }
    default:
      return state
  }
}

export default CardsReducer;