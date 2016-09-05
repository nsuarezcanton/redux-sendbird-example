export const LOGIN = 'LOGIN';

export function login (username) {
  console.log(`@Action LOGIN username:${username}`);
  return {
    type: LOGIN,
    payload: username,
  };
}
