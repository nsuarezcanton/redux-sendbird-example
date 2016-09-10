import { LOGIN } from '../actions/index';

export default function (state = {}, action) {
  console.log(action.payload);
  const loginResponse = action.payload;
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, loginResponse);
    default:
      return state;
  }
}
