import sendbird from 'sendbird';

// SendBird App ID
// TODO: Add as .env variable
const APP_ID = '92810347-7548-4EAD-AC80-6107B5DAE06D';

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
    sendbird.init({
      page,
      limit: 20,
      successFunc: (data) => {
        resolve({
          channels: data.channels,
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
    payload: loadChannels,
  };
}
