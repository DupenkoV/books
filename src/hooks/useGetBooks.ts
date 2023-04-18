import { useState } from 'react';
import { BooksDto } from '../types';
import { DataService } from '../api/services/DataService';

/**
 * Хук для получения информации с "бэка". Хотел прикрутить намного больше, но не успел. Не реализовал PUT, GET и DELETE.
 */

export const useGetBooks = () => {
  const dataService = new DataService();
  const [books, setBooks] = useState<BooksDto[]>([]);

  const fetchBooks = async () => {
    const booksFromBack = await dataService.getBooks();

    setBooks(booksFromBack);
  };
  return {
    books,
    setBooks,
    fetchBooks,
  };
};
