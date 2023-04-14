import { useEffect } from "react";
import { addBooks, fetchBooks } from '../../slices/bookSlice';

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { nanoid } from '@reduxjs/toolkit'
import { BookCard } from '../index'

export const BooksList = () => {
  let books = useAppSelector(state => state.books);
  const dispatch = useAppDispatch();

  const bookZZZ = books.map((item, idx) => <BookCard key={nanoid()} {...item}/>)

  useEffect(() => {
    if(window.localStorage.books) {
      dispatch(addBooks(JSON.parse(window.localStorage.getItem('books'))))
    } else {
      dispatch(fetchBooks()) 
    }
    
  }, []);

   useEffect(() => {
    window.localStorage.books = JSON.stringify(books)
  }, [books])

  
  return (
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px'}}>
      {bookZZZ}
    </div>
  )
}
