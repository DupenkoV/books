import { useEffect } from "react";
import { addBooks, fetchBooks } from '../../slices/bookSlice';

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { nanoid } from '@reduxjs/toolkit'
import { BookCard } from '../index'

export const BooksList = () => {
  let books = useAppSelector(state => state.books.booksList);
  const dispatch = useAppDispatch();

  const bookZZZ = books.map((item, idx) => <BookCard key={nanoid()} {...item}/>)

  useEffect(() => {
    if(window.localStorage.booksList) {
      dispatch(addBooks(JSON.parse(window.localStorage.getItem('booksList'))))
    } else {
      dispatch(fetchBooks()) 
    }
    
  }, []);

   useEffect(() => {
    window.localStorage.booksList = JSON.stringify(books)
  }, [books])


  return (
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px'}}>
      {bookZZZ}
    </div>
  )
}
