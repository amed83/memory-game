import { INCREMENT_ATTEMPTS, RESET_GAME } from "../actions/actionTypes"


const INITIAL_STATE = {
  attempts: 0
}

const ScoreReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT_ATTEMPTS:
      return {
        ...state,
        attempts: state.attempts + 1
      }
    case RESET_GAME:
      return {
        ...INITIAL_STATE
      }
  }
  return state
}

export default ScoreReducer