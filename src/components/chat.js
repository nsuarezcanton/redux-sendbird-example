import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { login } from '../actions/index';

class Login extends Component {
  static propTypes = {
    // username: PropTypes.string,
    // login: PropTypes.func,
    // success: PropTypes.bool,
    // navigator: PropTypes.object,
    // submitInProgress: PropTypes.bool,
  };

  static styles = {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'stretch',
      backgroundColor: '#ffffff',
    },
    topContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#6E5BAA',
      paddingTop: 20,
    },
    chatContainer: {
      flex: 11,
      justifyContent: 'center',
      alignItems: 'stretch',
    },
    inputContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'stretch',
    },
  };

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      submitInProgress: false,
    };
  }

  render () {
    return (
      <View style={Login.styles.container}>
        <Text style={{ color: '#fff' }}>Chat</Text>
      </View>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login }, dispatch);
}

function mapStateToProps(state = {}) {
  const loginState = state.login;
  return {
    success: loginState.success,
    error: loginState.error,
    username: loginState.user_name,
  };
}

export default connect(null, mapDispatchToProps)(Login);
