import immutable from 'seamless-immutable';
import {
  SET_LANGUAGE,
} from './constants';


const initialState = immutable({
  language: localStorage.getItem('language') || 'us',
});
const HANDLERS = {
  [SET_LANGUAGE]: (state, action) => ({
    ...state,
    language: action.payload,
  }),
};

export default function homeReducer(state = initialState, action) {
  const handler = HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
