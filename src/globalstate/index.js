import reducerCombined from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import requestMiddleWare from '../common/middleware'


export function configureStore() {
  let middleware = [
    thunk,
    requestMiddleWare,
  ];
  let finalCreateStore = compose(
    applyMiddleware.apply(this, middleware)
  )(createStore);

  const store = finalCreateStore(reducerCombined);
  return store;
};

