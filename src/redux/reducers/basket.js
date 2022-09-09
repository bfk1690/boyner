let defaultState = {
  basket_count: 0,
};

const basket = (state = defaultState, action) => {
  switch (action.type) {
    case 'INCREASE_BASKET_COUNT':
      return {
        basket_count: basket_count + 1,
      };
    default:
      return state;
  }
};

export default basket;
