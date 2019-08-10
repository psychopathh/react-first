import { applyMiddleware, createStore, compose } from 'redux';
import persistState from 'redux-localstorage';
import reducer from './reducer/reducer';
import logger from 'redux-logger'

const enhancer = compose(
	persistState(),
	applyMiddleware(logger)
);

const store = createStore(
  reducer,
	enhancer
)

export default store;