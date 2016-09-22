import sendbird from 'sendbird';

// SendBird App ID
// TODO: Add as .env variable
const APP_ID = 'A7A2672C-AD11-11E4-8DAA-0A18B21C2D82';

export const LOGIN = 'LOGIN';
export function login (username) {
  const loginSuccess = new Promise((resolve, reject) => {
    sendbird.init({
      app_id: APP_ID,
      guest_id: username,
      user_name: username,
      image_url: '',
      access_token: '',
      successFunc: () => {
        resolve({
          success: true,
          user_name: username,
        });
      },
      errorFunc: (status, error) => {
        reject({
          error: new Error(error),
        });
      },
    });
  });

  return {
    type: LOGIN,
    payload: loginSuccess,
  };
}

export const FETCH_CHANNELS = 'FETCH_CHANNELS';
export function fetchChannels (page) {
  const loadChannels = new Promise((resolve, reject) => {
    sendbird.getChannelList({
      page,
      limit: 20,
      successFunc: (data) => {
        resolve({
          success: true,
          response: data,
        });
      },
      errorFunc: (status, error) => {
        reject({
          error: new Error(error),
        });
      },
    });
  });

  return {
    type: FETCH_CHANNELS,
    payload: loadChannels,
  };
}


export const JOIN_CHANNEL = 'JOIN_CHANNEL';
export function joinChannel (url) {
  const joinChannelRequest = new Promise((resolve, reject) => {
    sendbird.joinChannel(
      url,
      {
        successFunc: (data) => {
          resolve({
            joinChannelSuccessful: true,
            joinChannelResponse: data,
          });
          sendbird.connect({
            successFunc: (test) => {
              console.log(test);
            },
            errorFunc: (status, error) => {
              console.log(status, error);
            },
          });
        },
        errorFunc: (status, error) => {
          // console.log(status, error);
          reject({
            error: new Error(error),
          });
        },
      }
    );
  });


  return {
    type: JOIN_CHANNEL,
    payload: joinChannelRequest,
  };
}

export const RECIVE_MESSAGE = 'RECIVE_MESSAGE';
export function reciveMessage () {
  sendbird.events.onMessageReceived = (obj) => {
    // console.log(obj);
    // this.setState({messageList: this.state.messageList.concat([obj])});
  };
}

export const LEAVE_CHAT = 'LEAVE_CHAT';
export function leaveChat () {
  sendbird.disconnect();
  return {
    type: LEAVE_CHAT,
    payload: true,
  };
}

export const GET_MESSAGES = 'GET_MESSAGES';
export function getMessages () {
  const getMessagesRequest = new Promise((resolve, reject) => {
    sendbird.getMessageLoadMore({
      limit: 100,
      successFunc: (data) => {
        const messageList = [];
        data.messages.reverse().forEach((msg, index) => {
          if (sendbird.isMessage(msg.cmd)) {
            messageList.push(msg.payload);
          }
        });

        resolve({
          getMessagesSuccessful: true,
          getMessagesResponse: messageList,
        });
        // this.setState({ messageList: messageList.concat(this.state.messageList) });
      },
      errorFunc: (status, error) => {
        reject({
          error: new Error(error),
        });
      },
    });
  });

  return {
    type: GET_MESSAGES,
    payload: getMessagesRequest,
  };
}
