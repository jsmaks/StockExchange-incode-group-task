import style from './StockList.module.scss';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchStockExchangeList, deleteStockExchange } from '../../../redux/StockExchange-operations';
import { getStockExchangeList } from '../../../redux/StockExchange-selectors';

export default function StockList() {
  const dispatch = useDispatch();
  const list = useSelector(getStockExchangeList);

  useEffect(() => {
    dispatch(fetchStockExchangeList());
  }, [dispatch]);

  return (
    <div className={style.block__list}>
      <ul className={style.list}>
        <li className={`${style.item} ${style.border}`}>
          <p className={`${style.name} ${style.title}`}>Ticker</p>
          <p className={`${style.name} ${style.title}`}>Exchange</p>
          <p className={`${style.name} ${style.title}`}>Price $</p>
          <p className={`${style.name} ${style.title}`}>Change</p>
          <p className={`${style.name} ${style.title}`}>Change %</p>
          <p className={`${style.name} ${style.title}`}>Yield</p>
          <p className={`${style.name} ${style.title}`}>Dividend</p>
          <p className={`${style.name} ${style.title}`}>Last trade</p>
          <p className={`${style.name} ${style.title}`}>Delete</p>
        </li>
        {list.map((el, index) => {
          const checkChange = el.price - el.change > 0;
          return (
            <li className={style.item} key={el.ticker}>
              <p className={style.name}>{el.ticker}</p>
              <p className={style.name}>{el.exchange}</p>
              <p className={style.name}>{el.price}$</p>
              <p className={`${style.name}`}>{el.change}</p>
              <p className={`${style.name} ${checkChange ? style.positive : style.negative}`}>{el.change_percent}%</p>
              <p className={style.name}>{el.dividend}</p>
              <p className={style.name}>{el.yield}</p>
              <p className={style.name}>{[...el.last_trade_time].splice(11, 8)}</p>
              <p className={style.name}>
                <button className={style.btn_Delete} onClick={() => dispatch(deleteStockExchange(index))}>
                  Delete
                </button>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
