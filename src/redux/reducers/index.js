import {combineReducers} from '@reduxjs/toolkit';
import basket from './basket';
import loading from './loading';
const reducer = combineReducers({
  basket,
  loading,
});

export default reducer;
