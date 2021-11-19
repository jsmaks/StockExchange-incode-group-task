import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import * as action from './StockExchange-actions';

const StockExchangeList = createReducer([], {
  [action.fetchStockExchangeSuccess]: (_state, { payload }) => payload,
});

const disabledState = createReducer(false, {
  [action.stopStockExchangeSuccess]: () => true,
  [action.startStockExchangeSuccess]: () => false,
  [action.addStockExchangeSuccess]: () => false,
  [action.deleteStockExchangeSuccess]: () => false,
  [action.setIntervalStockExchangeSuccess]: () => false,
});

//For Spinner
const loading = createReducer(false, {
  [action.fetchStockExchangeReq]: () => true,
  [action.fetchStockExchangeError]: () => false,
  [action.fetchStockExchangeSuccess]: () => false,
  [action.startStockExchangeReq]: () => true,
  [action.startStockExchangeSuccess]: () => false,
  [action.startStockExchangeError]: () => false,
  [action.addStockExchangeReq]: () => true,
  [action.addStockExchangeSuccess]: () => false,
  [action.addStockExchangeError]: () => false,
  [action.deleteStockExchangetReq]: () => true,
  [action.deleteStockExchangeSuccess]: () => false,
  [action.deleteStockExchangeError]: () => false,
  [action.setIntervalStockExchangeReq]: () => true,
  [action.setIntervalStockExchangeSuccess]: () => false,
  [action.setIntervalStockExchangeError]: () => false,
});

export default combineReducers({
  StockExchangeList,
  disabledState,
  loading,
});
