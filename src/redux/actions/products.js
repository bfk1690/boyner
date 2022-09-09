import store from '../store';

export function setLoading() {
  store.dispatch({
    type: 'SET_LOADING',
  });
}

export function removeLoading() {
  store.dispatch({
    type: 'REMOVE_LOADING',
  });
}
