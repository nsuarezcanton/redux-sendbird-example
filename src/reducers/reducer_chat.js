import { LEAVE_CHAT, GET_MESSAGES, SEND_MESSAGE, RECEIVE_MESSAGE } from '../actions/index';

export default function (state = {}, action) {
  switch (action.type) {
    case LEAVE_CHAT:
      return Object.assign({}, state, { leaveSuccess: action.payload });
    case GET_MESSAGES:
      return Object.assign({}, state, { messageList: action.payload.getMessagesResponse });
    case SEND_MESSAGE:
      return Object.assign({}, state, { messageSent: action.payload });
    case RECEIVE_MESSAGE:
      console.log(state);
      return Object.assign({}, state, { messageSent: action.payload });
    default:
      return state;
  }
}
