import {
  // LOAD_CATS_DATA,
  REMOVE_CAT_DATA,
  LOAD_CATS_DATA_SUCCESS,
  LOAD_CATS_DATA_PENDING,
  LOAD_CATS_DATA_FAILURE,
} from '../constants/cats';

import { fetchData } from '../utils/fetchHelper';
import { parseAllResponses } from '../utils/cats';

import { default as _isArray } from 'lodash/isArray';
import 'es6-promise';

export function loadCatsData(urls) {
  return () => (dispatch) => {
    if (_isArray(urls)) {
      dispatch(loadCatsDataPending());

      Promise.all(
        urls.map(fetchData)
      )
      .then((allResponse) => {
        if (!_isArray(allResponse)) {
          throw Error('invalid API responses');
        }
        const data = parseAllResponses(allResponse);
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

export function removeCatData(e) {
  const href = e.target.getAttribute('href');
  return {
    type: REMOVE_CAT_DATA,
    payload: { removeIndex: href ? href.substr(1) : -1 },
  };
}

export function loadCatsDataSuccess(data) {
  console.log('action: load cats data success, data=', data);
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
