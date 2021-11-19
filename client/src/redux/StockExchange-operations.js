import { io } from 'socket.io-client';
import * as actions from './StockExchange-actions';

const socket = io('ws://localhost:4000', {
  query: {
    defaultInterval: 5000,
    tickers: ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'FB', 'TSLA'],
  },
});

export const fetchStockExchangeList = () => (dispatch) => {
  dispatch(actions.fetchStockExchangeReq());
  try {
    socket.emit('start').on('ticker', (data) => {
      dispatch(actions.fetchStockExchangeSuccess(data));
    });
  } catch (error) {
    dispatch(actions.fetchStockExchangeError());
  }
};

export const startStockExchange = () => (dispatch) => {
  dispatch(actions.startStockExchangeReq());
  try {
    socket.connect().emit('start');
    dispatch(actions.startStockExchangeSuccess());
  } catch (error) {
    dispatch(actions.startStockExchangeError(error));
  }
};

export const stopStockExchange = () => (dispatch) => {
  dispatch(actions.stopStockExchangeReq());
  try {
    socket.disconnect();
    dispatch(actions.stopStockExchangeSuccess());
  } catch (error) {
    dispatch(actions.stopStockExchangeError(error));
  }
};

export const addStockExchange = (newStock) => (dispatch) => {
  dispatch(actions.addStockExchangeReq());
  try {
    socket.disconnect();
    socket.io.opts.query.tickers.push(newStock);
    socket.connect().emit('start');
    dispatch(actions.addStockExchangeSuccess());
  } catch (error) {
    dispatch(actions.addStockExchangeError(error));
  }
};

export const deleteStockExchange = (index) => (dispatch) => {
  dispatch(actions.deleteStockExchangetReq());
  try {
    socket.disconnect();
    console.log(index);
    socket.io.opts.query.tickers.splice(index, 1);
    socket.connect().emit('start');
    dispatch(actions.deleteStockExchangeSuccess());
  } catch (error) {
    dispatch(actions.deleteStockExchangeError(error));
  }
};

export const customIntervalStockExchange = (newInterval) => (dispatch) => {
  dispatch(actions.setIntervalStockExchangeReq());
  try {
    socket.disconnect();
    socket.io.opts.query.defaultInterval = newInterval;
    socket.connect().emit('start');
    dispatch(actions.setIntervalStockExchangeSuccess());
  } catch (error) {
    dispatch(actions.setIntervalStockExchangeError(error));
  }
};
