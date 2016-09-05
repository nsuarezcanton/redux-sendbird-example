import React, { Component } from 'react';
import { Navigator } from 'react-native';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

// Components
import Login from './components/login';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const ROUTES = {
  login: Login,
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
