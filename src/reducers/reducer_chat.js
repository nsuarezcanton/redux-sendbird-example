import { LEAVE_CHAT } from '../actions/index';

export default function (state = {}, action) {
  switch (action.type) {
    case LEAVE_CHAT:
      return Object.assign({}, state, { leaveSuccess: action.payload });
    default:
      return state;
  }
}
