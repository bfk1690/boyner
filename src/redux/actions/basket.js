import store from '../store';

export function addToBasket(basketItem) {
  store.dispatch({
    type: 'ADD_TO_BASKET',
    payload: {
      basketItem,
    },
  });
}

export function removeFromBasket(basketItem) {
  store.dispatch({
    type: 'REMOVE_FROM_BASKET',
    payload: {
      basketItem,
    },
  });
}
