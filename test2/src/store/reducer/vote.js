import * as types from '../action-types';
export default function vote(state = {s: 0, r: 0}, action) {
  switch (action.type) {
    case types.VOTE_SUPPORT:
      state = {...state, s: state.s + 1};
      break;
    case types.VOTE_REJECT:
      state = {...state, r: state.r + 1};
      break;
    default:
      break;
  }
  return state;
}