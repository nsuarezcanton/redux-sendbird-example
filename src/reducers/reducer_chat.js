import { LEAVE_CHAT, GET_MESSAGES } from '../actions/index';

export default function (state = {}, action) {
  switch (action.type) {
    case LEAVE_CHAT:
      return Object.assign({}, state, { leaveSuccess: action.payload });
    case GET_MESSAGES:
      return state;
    default:
      return state;
  }
}
