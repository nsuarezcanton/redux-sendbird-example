import { LOGIN } from '../actions/index';

export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
