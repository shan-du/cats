import {
  LOAD_CATS_DATA_SUCCESS,
  LOAD_CATS_DATA_PENDING,
  LOAD_CATS_DATA_FAILURE,
  LOAD_IMAGE_ERROR,
  REMOVE_CAT_DATA,
  SORT_CATS_DATA,
} from '../constants/cats';
import appState from './initialState';
import { sortDataByFacts } from '../utils/cats';

import objectAssign from 'object-assign';
import { default as _filter } from 'lodash/filter';
import { default as _map } from 'lodash/map';

const initialState = objectAssign(
  {
    cats: {
      isLoading: false,
      hasErrors: false,
      data: [],
      sortOrder: '',
    },
  },
  appState,
);

const defaultImage = '../assets/404-not-found.jpg';

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

    case LOAD_IMAGE_ERROR: {
      const errorIndex = parseInt(action.payload.errorIndex, 10);

      if (!isNaN(errorIndex) && errorIndex >= 0) {
        console.log(`image ${state.data[errorIndex].image} not found at index ${errorIndex}`);
        const data = _map(
          state.data,
          (value, index) => {
            if (index === errorIndex) {
              return {
                image: defaultImage,
                fact: value.fact,
              };
            }
            return value;
          }
        );

        return setState(state, { data });
      }
      return state;
    }

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

    case SORT_CATS_DATA: {
      // toggle the sort order between asc & desc
      const sortOrder = (state.sortOrder === 'asc') ? 'desc' : 'asc';
      const sortedData = sortDataByFacts(state.data, sortOrder);

      return setState(
        state,
        {
          data: sortedData,
          sortOrder,
        }
      );
    }

    default:
      return state;
  }
}
