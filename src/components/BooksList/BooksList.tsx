import { useAppSelector } from '../../hooks/reduxHooks';
import { BookCard, SortButtons } from '../index';
import { AddBookCard } from '../index';
import { useEffect } from 'react';
import { addBooks, fetchBooks } from '../../slices/bookSlice';
import { useAppDispatch } from '../../hooks/reduxHooks';

/**
 * Компонент отвечает за каталог карточек с книгами и get запрос книг с "бэка".
 */

export const BooksList = () => {
  const books = useAppSelector(state => state.books.booksList);
  const dispatch = useAppDispatch();

  /**
   * в данном эффекте запрос книг с "бэка". Но, т.к. условием задания является хранение данных в LS, то мы изначально узнаем информацию из LS.
   */

  useEffect(() => {
    if (window.localStorage.booksList) {
      if (
        JSON.parse(window.localStorage.getItem('booksList')).length >
        books.length
      )
        dispatch(
          addBooks(JSON.parse(window.localStorage.getItem('booksList')))
        );
    } else {
      dispatch(fetchBooks());
    }
  }, []);

  useEffect(() => {
    window.localStorage.booksList = JSON.stringify(books);
  }, [books]);

  return (
    <>
      <SortButtons />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '10px',
        }}>
        {books.map(item => (
          <BookCard key={item.id} {...item} />
        ))}
        <AddBookCard />
      </div>
    </>
  );
};
