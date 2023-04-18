import { useState } from 'react';
import { Button } from 'antd';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { sortBooksState } from '../../slices/bookSlice';

interface actionProps {
  prop: string;
  dir: boolean;
}

export const SortButtons = () => {
  const [sortName, setSortName] = useState(false);
  const [sortDate, setSortDate] = useState(false);
  const dispatch = useAppDispatch();

  const handleClick = (action: actionProps, dir) => {
    dispatch(sortBooksState(action));
    dir;
  };

  const clearLocalStorage = () => {
    window.localStorage.clear();
    location.reload();
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        height: '50px',
        padding: '30px',
      }}
    >
      <Button
        type="primary"
        onClick={() =>
          handleClick({ prop: 'title', dir: sortName }, setSortName(!sortName))
        }
      >
        Сортировать по названию
      </Button>
      <Button
        type="primary"
        onClick={() =>
          handleClick(
            { prop: 'publishingDate', dir: sortDate },
            setSortDate(!sortDate),
          )
        }
      >
        Сортировать по году публикации
      </Button>
      <Button type="primary" onClick={() => clearLocalStorage()}>
        Сбросить localStorage
      </Button>
    </div>
  );
};
