import { combineReducers } from 'redux';
import LoginReducer from './reducer_login';
import ChannelsReducer from './reducer_channels';
import ChatReducer from './reducer_chat';

const rootReducer = combineReducers({
  login: LoginReducer,
  channels: ChannelsReducer,
  chat: ChatReducer,
});

export default rootReducer;
