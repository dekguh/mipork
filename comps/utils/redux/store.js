import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import cartReducers from '../reducers/CartReducers';
import { createWrapper } from 'next-redux-wrapper';
import Searchreducers from '../reducers/SearchReducers';

const middleware = [];

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enchancer = composeEnhancers(applyMiddleware(...middleware));

const combineAll = combineReducers({
    cart: cartReducers,
    search: Searchreducers
});

const makeStore = () => createStore(combineAll, enchancer);

export const wrapper = createWrapper(makeStore);