import {
  LOAD_CATS_DATA,
  REMOVE_CAT_DATA,
  LOAD_CATS_DATA_SUCCESS,
  LOAD_CATS_DATA_PENDING,
  LOAD_CATS_DATA_FAILURE,
} from '../constants/cats';

import objectAssign from 'object-assign';
import appState from './initialState';

import { default as _filter } from 'lodash/filter';

const initialState = objectAssign(
  {
    cats: {
      isLoading: false,
      hasErrors: false,
      data: [],
    },
  },
  appState,
);

/**
 * merge new state into old state & returns new state.
 * old state is NOT mutated
 */
const setState = (oldState, newState) =>  objectAssign(
  {},
  oldState,
  newState,
);

export default function catsReducer(state = initialState.cats, action) {
  switch (action.type) {
    case REMOVE_CAT_DATA: {
      const removeIndex = parseInt(action.payload.removeIndex, 10);

      if (!isNaN(removeIndex) && removeIndex >= 0) {
        // return array with the removeIndex entry filtered out
        const data = _filter(
          state.data,
          (value, index) => (index !== removeIndex)
        );

        return setState(state, { data });
      }
      return state;
    }

    case LOAD_CATS_DATA_PENDING:
      return setState(
        state,
        {
          isLoading: true,
          hasErrors: false,
          data: [],
        }
      );

    case LOAD_CATS_DATA_FAILURE:
     return setState(
        state,
        {
          isLoading: false,
          hasErrors: true,
        }
      );

    case LOAD_CATS_DATA_SUCCESS: {
      const data = action.payload.data;
      return setState(
        state,
        {
          isLoading: false,
          hasErrors: false,
          data,
        }
      );
    }

    case LOAD_CATS_DATA: {
      return setState(state, {
        data: [
          {
            media: 'url1',
            text: 'some text 1',
          },
          {
            media: 'url2',
            text: 'some text 2',
          },
          {
            media: 'url3',
            text: 'some text 3',
          },
        ],
      });
    }

    default:
      return state;
  }
}
