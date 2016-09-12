import { FETCH_CHANNELS } from '../actions/index';

export default function (state = {}, action) {
  const fetchChannelsResponse = action.payload;
  switch (action.type) {
    case FETCH_CHANNELS:
      console.log(fetchChannelsResponse);
      return Object.assign({}, state, fetchChannelsResponse);
    default:
      return state;
  }
}
