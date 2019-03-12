import { takeEvery, put } from 'redux-saga/effects';
import { GET_LANGUAGE } from './constants';

const HANDLERS = {
  * [GET_LANGUAGE]() {
    try {
      yield put();
    } catch (err) {
      throw new Error(err);
    }
  },
};
export function* sagaWatcher({ type, payload }) {
  const handler = HANDLERS[type];
  if (handler != null) yield handler(payload);
}


export default function* sagaReducerAuth() {
  yield takeEvery('*', sagaWatcher);
}
