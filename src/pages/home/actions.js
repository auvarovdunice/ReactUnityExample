import { SET_LANGUAGE } from './constants';

const actions = {
  setLanguage: language => ({
    type: SET_LANGUAGE,
    payload: language,
  }),
};

export default actions;
