import { FETCH_CHANNELS, JOIN_CHANNEL } from '../actions/index';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_CHANNELS:
      return Object.assign({}, state, action.payload);
    case JOIN_CHANNEL:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
