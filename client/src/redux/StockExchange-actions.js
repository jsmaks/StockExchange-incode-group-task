import { createAction } from '@reduxjs/toolkit';

export const fetchStockExchangeReq = createAction('stockExchange/fetchStockListReq');
export const fetchStockExchangeError = createAction('stockExchange/fetchStockListError');
export const fetchStockExchangeSuccess = createAction('stockExchange/fetchStockListSuccess');

export const startStockExchangeReq = createAction('stockExchange/startStockReq');
export const startStockExchangeSuccess = createAction('stockExchange/startStockSuccess');
export const startStockExchangeError = createAction('stockExchange/startStockError');

export const stopStockExchangeReq = createAction('stockExchage/stopStockReq');
export const stopStockExchangeSuccess = createAction('stockExchage/stopStockSuccess');
export const stopStockExchangeError = createAction('stockExchage/stopStockError');

export const addStockExchangeReq = createAction('stockExchange/addStockReq');
export const addStockExchangeSuccess = createAction('stockExchange/addStockSuccess');
export const addStockExchangeError = createAction('stockExchange/addStockError');

export const deleteStockExchangetReq = createAction('stockExchange/deleteStockReq');
export const deleteStockExchangeSuccess = createAction('stockExchange/deleteStockSuccess');
export const deleteStockExchangeError = createAction('stockExchange/deleteStockError');

export const setIntervalStockExchangeReq = createAction('stockExchange/setIntervalReq');
export const setIntervalStockExchangeSuccess = createAction('stockExchange/setIntervalSuccess');
export const setIntervalStockExchangeError = createAction('stockExchange/setIntervalError');
