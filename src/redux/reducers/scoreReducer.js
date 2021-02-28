import { INCREMENT_ATTEMPTS } from "../actions/actionTypes"


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
  }
  return state
}

export default ScoreReducer