import {
  LOAD_CATS_DATA_SUCCESS,
  LOAD_CATS_DATA_PENDING,
  LOAD_CATS_DATA_FAILURE,
  LOAD_IMAGE_ERROR,
  REMOVE_CAT_DATA,
  SORT_CATS_DATA,
} from '../constants/cats';

import { fetchData } from '../utils/fetchHelper';
import { parseAllResponses } from '../utils/cats';

import { default as _isArray } from 'lodash/isArray';
import 'es6-promise';

/**
 * Redux thunk that calls API & updates states asynchronously via Promise & fetch
 * @param {String[]} urls
 */
export function loadCatsData(urls) {
  return () => (dispatch) => {
    if (_isArray(urls)) {
      dispatch(loadCatsDataPending());

      // use Promise.all to call multiple APIs
      Promise.all(
        urls.map(fetchData) // a list of Promises (fetch)
      )
      .then((allResponses) => {
        if (!_isArray(allResponses)) {
          throw Error('invalid API responses');
        }
        const data = parseAllResponses(allResponses);
        dispatch(loadCatsDataSuccess(data));
      })
      .catch(
        (ex) => dispatch(loadCatsDataFailure(ex))
      );
    } else {
      dispatch(loadCatsDataFailure('Invalid API URL supplied'));
    }
  };
}

export function loadCatsDataSuccess(data) {
  return {
    type: LOAD_CATS_DATA_SUCCESS,
    payload: { data },
  };
}

export function loadCatsDataFailure(error) {
  console.log('action: load cats data failure with error=', error);
  return {
    type: LOAD_CATS_DATA_FAILURE,
    payload: { error },
  };
}

export function loadCatsDataPending() {
  console.log('action: load cats data pending');
  return {
    type: LOAD_CATS_DATA_PENDING,
  };
}

export function loadImageError(event) {
  const errorIndex = event.target.getAttribute('data-index');
  return {
    type: LOAD_IMAGE_ERROR,
    payload: { errorIndex },
  };
}

export function removeCatData(event) {
  const removeIndex = event.target.getAttribute('data-index');
  return {
    type: REMOVE_CAT_DATA,
    payload: { removeIndex },
  };
}

export function sortDataByFacts() {
  return {
    type: SORT_CATS_DATA,
  };
}

