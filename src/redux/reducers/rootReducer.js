import { combineReducers } from 'redux';

import CardsReducer from './cardsReducer';
import ScoreReducer from './scoreReducer';

const RootReducer = combineReducers({
  dashboard: CardsReducer,
  score: ScoreReducer,
})

export default RootReducer;