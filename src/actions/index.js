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
        console.log(data);
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
