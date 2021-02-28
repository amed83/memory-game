import { INCREMENT_ATTEMPTS, RESET_GAME } from "./actionTypes";


export const IncrementAttempts = () => ({
  type: INCREMENT_ATTEMPTS
});

export const ResetGame = () => ({
  type: RESET_GAME
});