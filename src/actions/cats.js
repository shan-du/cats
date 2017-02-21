import {
  LOAD_CATS_DATA,
  REMOVE_CAT_DATA,
} from '../constants/cats';

export function loadCatsData() {
  return function (dispatch) {
    return dispatch({
      type: LOAD_CATS_DATA,
    });
  };
}

export function removeCatData() {
  return {
    type: REMOVE_CAT_DATA,
  };
}
