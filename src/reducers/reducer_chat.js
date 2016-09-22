import { LEAVE_CHAT, GET_MESSAGES, SEND_MESSAGE } from '../actions/index';

export default function (state = {}, action) {
  console.log(action.payload);
  switch (action.type) {
    case LEAVE_CHAT:
      return Object.assign({}, state, { leaveSuccess: action.payload });
    case GET_MESSAGES:
      return Object.assign({}, state, { messageList: action.payload.getMessagesResponse.concat(action.payload.previousMessageList) });
    case SEND_MESSAGE:
      return Object.assign({}, state, { messageSent: action.payload });
    default:
      return state;
  }
}
