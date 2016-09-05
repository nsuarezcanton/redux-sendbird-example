import sendbird from 'sendbird';

export const LOGIN = 'LOGIN';

export function login (username) {
  sendbird.init({
    app_id: '92810347-7548-4EAD-AC80-6107B5DAE06D',
    guest_id: username,
    user_name: username,
    image_url: '',
    access_token: '',
    successFunc: (data) => {
      console.log('success');
    },
    errorFunc: (status, error) => {
      this.setState({ username: '' });
    },
  });
  console.log(`@Action LOGIN username:${username}`);
  return {
    type: LOGIN,
    payload: username,
  };
}
