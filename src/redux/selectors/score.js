import { createSelector } from 'reselect';

export const getAttempts = createSelector(
  state => state.score,
  score => score.attempts
)