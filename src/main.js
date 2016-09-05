// React && React Native
import React, { Component } from 'react';
import { Navigator } from 'react-native';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';

// Components
import Login from './components/login';
import Channels from './components/channels';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const ROUTES = {
  login: Login,
  channels: Channels,
};

export default class Main extends Component {
  static styles = {
    container: {
      flex: 1,
    },
  }

  renderScene(route, navigator) {
    const RenderComponent = ROUTES[route.name];
    return (
      <RenderComponent route={route} navigator={navigator} />
    );
  }

  render () {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <Navigator
          style={Main.styles.container}
          initialRoute={{ name: 'login' }}
          renderScene={this.renderScene}
          configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }}
        />
      </Provider>
    );
  }
}
