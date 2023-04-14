import { useEffect } from "react";
import { fetchBooks } from '../../slices/bookSlice';

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { nanoid } from '@reduxjs/toolkit'
import { BookCard } from '../index'

export const BooksList = () => {
  const books = useAppSelector(state => state.books);
  const dispatch = useAppDispatch();

  const bookZZZ = books.map((item, idx) => <BookCard key={idx} {...item}/>)

  useEffect(() => {
    dispatch(fetchBooks()) 
  }, []);
  
  return (
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px'}}>
      {bookZZZ}
    </div>
  )
}
