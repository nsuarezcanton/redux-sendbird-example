import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../actions/index';

class Login extends Component {
  static propTypes = {
    username: PropTypes.string,
    login: PropTypes.func,
  };

  static styles = {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'stretch',
      backgroundColor: '#6E5BAA',
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
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#328FE6',
      padding: 10,
      marginTop: 10,
      backgroundColor: '#32c5e6',
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

    this.state = { username: '' };
  }

  onPress = () => {
    const { username } = this.state;
    this.props.login(username);
  };

  onChangeText = (text) => {
    console.log(text);
    this.setState({ username: text });
  };

  render () {
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
            underlayColor={'#328FE6'}
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

export default connect(null, mapDispatchToProps)(Login);

