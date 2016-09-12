import { combineReducers } from 'redux';
import LoginReducer from './reducer_login';
import ChannelsReducer from './reducer_channels';

const rootReducer = combineReducers({
  login: LoginReducer,
  channels: ChannelsReducer,
});

export default rootReducer;
