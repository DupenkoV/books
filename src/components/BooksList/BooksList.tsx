import { useEffect } from "react";
import { addBooks, fetchBooks } from '../../slices/bookSlice';
import { Button } from 'antd';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { nanoid } from '@reduxjs/toolkit'
import { BookCard, SortButtons } from '../index'
import { AddBookCard } from '../index';

export const BooksList = () => {
  const books = useAppSelector(state => state.books.booksList);

  const dispatch = useAppDispatch();
  console.log(books)
  const bookZZZ = books.map((item) => <BookCard key={nanoid()} {...item}/>)

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
    <>
      <SortButtons />
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px'}}>
        {bookZZZ}
        <AddBookCard />
      </div>
    </>
    
  )
}
