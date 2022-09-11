import {navigationRef} from '../../RootNavigation';

let defaultState = {
  basketItems: [],
};

const basket = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      const itemInCart = state.basketItems.find(
        item => item.ListingId === action.payload.basketItem.ListingId,
      );
      if (itemInCart) {
        navigationRef.navigate('Basket');
        return {
          ...state,
        };
      } else {
        navigationRef.navigate('Basket');
        return {
          basketItems: [...state.basketItems, action.payload.basketItem],
        };
      }

    case 'REMOVE_FROM_BASKET':
      console.log(state.basketItems, 'BAKSANA');
      return state.basketItems.length > 0
        ? state.basketItems.filter(
            basketItem => basketItem !== action.payload.basketItem,
          )
        : state;
    default:
      return state;
  }
};

export default basket;
