import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, TextInput, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { Spinner } from 'react-native-spinkit';

import { login } from '../actions/index';

class Login extends Component {
  static propTypes = {
    username: PropTypes.string,
    login: PropTypes.func,
    success: PropTypes.bool,
    navigator: PropTypes.object,
    submitInProgress: PropTypes.bool,
  };

  static styles = {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'stretch',
      backgroundColor: '#CEF7A0',
    },
    loginContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      width: 250,
      color: '#555555',
      padding: 10,
      height: 50,
      borderColor: '#32C5E6',
      borderWidth: 1,
      borderRadius: 4,
      alignSelf: 'center',
      backgroundColor: '#ffffff',
    },
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      padding: 10,
      marginTop: 10,
      backgroundColor: 'rgba(5, 74, 145, 1)',
    },
    label: {
      width: 230,
      flex: 1,
      alignSelf: 'center',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: '600',
      color: '#ffffff',
    },
  };

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      submitInProgress: false,
    };
  }

  componentWillUpdate = (nextProps) => {
    const { success } = nextProps;
    if (success) {
      this.props.navigator.push({ name: 'channels' });
    }
  };

  onPress = () => {
    const { username } = this.state;
    this.props.login(username);
    this.setState({ submitInProgress: true });
  };

  onChangeText = (formInput) => {
    this.setState({ username: formInput });
  };

  render () {
    const { submitInProgress } = this.state;
    return (
      <View style={Login.styles.container}>
        <View style={Login.styles.loginContainer}>
          <TextInput
            style={Login.styles.input}
            value={this.state.username}
            onChangeText={this.onChangeText}
            placeholder={'Enter User Nickname'}
            maxLength={12}
            multiline={false}
          />
          <TouchableHighlight
            style={Login.styles.button}
            underlayColor={'#D4F2DB'}
            onPress={this.onPress}
          >
            <Text style={Login.styles.label}>LOGIN</Text>
          </TouchableHighlight>
        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
