import style from './StockPanel.module.scss';

import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  customIntervalStockExchange,
  stopStockExchange,
  startStockExchange,
  addStockExchange,
} from '../../../redux/StockExchange-operations';
import { isDisabled } from '../../../redux/StockExchange-selectors';

export default function StockPanel() {
  const dispatch = useDispatch();
  const disabledBtn = useSelector(isDisabled);

  const [intervalValue, setIntervalValue] = useState('');
  const [newStock, setNewStock] = useState('');

  const handleChange = (e) => {
    const type = e.currentTarget.type;
    const value = e.currentTarget.value;
    type === 'number' ? setIntervalValue(value) : setNewStock(value);
  };

  const handleSubmitInterval = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(customIntervalStockExchange(Number(intervalValue * 1000)));
      setIntervalValue('');
    },
    [dispatch, intervalValue],
  );

  const handleSubmitNewStock = useCallback(
    (e) => {
      e.preventDefault();
      if (!newStock) return;
      dispatch(addStockExchange(newStock));
      setNewStock('');
    },
    [dispatch, newStock],
  );

  return (
    <>
      <div className={style.controlPanel}>
        <div className={style.buttonBlock}>
          <button
            type="button"
            className={style.button}
            onClick={() => dispatch(startStockExchange())}
            disabled={!disabledBtn}
          >
            Start
          </button>
          <button
            type="button"
            className={`${style.button} ${style.redBtn}`}
            onClick={() => dispatch(stopStockExchange())}
            disabled={disabledBtn}
          >
            Stop
          </button>
        </div>

        <form className={style.form} onSubmit={handleSubmitInterval}>
          <input
            className={style.input}
            type="number"
            value={intervalValue}
            placeholder="Enter interval (sec)"
            onChange={handleChange}
          />
          <button type="submit" className={style.button} disabled={!intervalValue}>
            Set interval
          </button>
        </form>

        <form className={style.form} onSubmit={handleSubmitNewStock}>
          <input
            pattern="^[zA-Zа]+(([' -][zA-Zа ])?[zA-Zа]*)*$"
            title="Имя акции может состоять только из заглавных латинских букв"
            className={style.input}
            type="name"
            value={newStock}
            placeholder="Add new stock"
            onChange={handleChange}
          />
          <button type="submit" className={style.button}>
            Add
          </button>
        </form>
      </div>
    </>
  );
}
