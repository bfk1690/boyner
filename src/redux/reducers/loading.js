let defaultState = {
  is_loading: false,
};

const loading = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        is_loading: true,
      };
    case 'REMOVE_LOADING':
      return {
        is_loading: false,
      };
    default:
      return state;
  }
};

export default loading;
