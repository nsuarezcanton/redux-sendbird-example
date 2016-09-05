import { LOGIN } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case LOGIN:
      return state;
  }

  return state;
}
