import { combineReducers } from 'redux';
import cats from './cats';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  cats,
  routing: routerReducer,
});

export default rootReducer;
