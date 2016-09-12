import { LOGIN } from '../actions/index';

export default function (state = {}, action) {
  const loginResponse = action.payload;
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, loginResponse);
    default:
      return state;
  }
}
