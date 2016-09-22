import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, TextInput, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getMessages, leaveChat } from '../actions/index';

const windowSize = Dimensions.get('window');

class Chat extends Component {
  static propTypes = {
    navigator: PropTypes.object,
    leaveChat: PropTypes.func,
    getMessages: PropTypes.func,
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
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#6E5BAA',
    },
    textContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    sendContainer: {
      justifyContent: 'flex-end',
      paddingRight: 10,
    },
    sendLabel: {
      color: '#ffffff',
      fontSize: 15,
    },
    input: {
      width: windowSize.width - 70,
      color: '#555555',
      paddingRight: 10,
      paddingLeft: 10,
      paddingTop: 5,
      height: 32,
      borderColor: '#6E5BAA',
      borderWidth: 1,
      borderRadius: 2,
      alignSelf: 'center',
      backgroundColor: '#ffffff',
    },
  };

  constructor(props) {
    super(props);

    this.state = {
      message: '',
      messageList: [],
    };
  }

  componentDidMount = () => {
    this.props.getMessages();
    console.log(this.props);
  }

  onBackPress = () => {
    this.props.leaveChat();
    this.props.navigator.pop();
  }

  render () {
    return (
      <View style={Chat.styles.container}>
        <View style={Chat.styles.topContainer}>
          <TouchableHighlight
            underlayColor={'#4e4273'}
            onPress={this.onBackPress}
            style={{ marginLeft: 15 }}
          >
            <Text style={{ color: '#fff' }}>&lt; Back</Text>
          </TouchableHighlight>
        </View>
        <View style={Chat.styles.chatContainer}>
          <Text style={{ color: '#000' }}>Chat</Text>
        </View>
        <View style={Chat.styles.inputContainer}>
          <View style={Chat.styles.textContainer}>
            <TextInput
              style={Chat.styles.input}
              value={this.state.message}
              onChangeText={(text) => this.setState({ message: text })}
            />
          </View>
          <View style={Chat.styles.sendContainer}>
            <TouchableHighlight
              underlayColor={'#4e4273'}
              onPress={() => this.onSendPress()}
            >
              <Text style={Chat.styles.sendLabel}>SEND</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ leaveChat, getMessages }, dispatch);
}

function mapStateToProps(state = {}) {
  const chatState = state.chat;
  return {
    leaveSuccess: chatState.leaveSuccess,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
