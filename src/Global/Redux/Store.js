import createSagaMiddleware from '@redux-saga/core';
import { legacy_createStore, applyMiddleware } from 'redux';
import Reducers from './Reducer';
import { commonSagaWatcher } from './Saga';

const sagaMiddleWare = createSagaMiddleware();
const middleWares = [sagaMiddleWare];
const store = legacy_createStore(
  Reducers,
  {},
  applyMiddleware(...middleWares)
);

sagaMiddleWare.run(commonSagaWatcher);
export default store;
