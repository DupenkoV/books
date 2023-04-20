import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './reduxHooks';
import { addBooks, getBookDetails } from '../slices/bookSlice';

/**
 * Хук отвечает за отправку параметра ID из URL в store и получения детальной информации по книге.
 * Также условным оператором сделан возврат объекта с пустыми строками для передачи его в компонент AddBookMenu,
 * который может использоваться как для редактирования книги, так и для добавления новой.
 */

export const useGetBookById = () => {
  const { id } = useParams();
  if (id === 'addNewBook')
    return {
      title: '',
      numberOfPages: 1,
      authors: [{ name: undefined, surname: undefined }],
      isbn: '',
      publishingHouse: '',
      publishingDate: '',
      releaseDate: '',
      image: '',
      id: '',
    };

  const book = useAppSelector(state => state.books.bookInfo);
  const dispatch = useAppDispatch();

  /**
   * DIspatch события addBooks, который забирает список из LS сделан для обновления store, т.к. при обновлении страницы или передачи ссылки терялся store.
   * Проблему смог решить пока только таким "костылем"
   */
  useEffect(() => {
    dispatch(addBooks(JSON.parse(window.localStorage.getItem('booksList'))));
    dispatch(getBookDetails(id));
  }, []);
  return book;
};
