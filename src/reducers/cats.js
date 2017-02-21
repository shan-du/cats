import {
  LOAD_CATS_DATA,
  REMOVE_CAT_DATA,
} from '../constants/cats';

import objectAssign from 'object-assign';
import appState from './initialState';

const initialState = objectAssign(
  { cats: {} },
  appState,
);

export default function catsReducer(state = initialState.cats, action) {
  let newState;

  switch (action.type) {
    case REMOVE_CAT_DATA:
      return state;

    case LOAD_CATS_DATA:
      return state;

    default:
      return state;
  }
}
