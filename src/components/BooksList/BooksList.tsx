import React, { useEffect } from "react";
import { useGetBooks } from "../../hooks/useGetBooks";
import { addBooks, fetchBooks1 } from '../../slices/bookSlice';
import BookCard from '../bookCard/BookCard';
import { useAppDispatch } from '../../hooks/reduxHooks';

export const BooksList = () => {
  const { books, fetchBooks } = useGetBooks();
  const dispatch = useAppDispatch();

  const bookZZZ = books.map((item) => <BookCard key={1} {...item}/>)
  useEffect(() => {
    fetchBooks();
  }, []);

  useEffect(() => {
    dispatch(fetchBooks1()) 
  }, [books]);
    
  return (
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'}}>
      {bookZZZ}
    </div>
  )
}
