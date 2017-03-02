import {
  LOAD_CATS_DATA,
  REMOVE_CAT_DATA,
} from '../constants/cats';

export function loadCatsData() {
  return (dispatch) => dispatch(
    {
      type: LOAD_CATS_DATA,
    }
  );
}

export function removeCatData(e) {
  const href = e.target.getAttribute('href');
  return {
    type: REMOVE_CAT_DATA,
    payload: { removeIndex: href ? href.substr(1) : -1 },
  };
}
