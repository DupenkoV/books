import { useEffect } from "react";
import { addBooks, fetchBooks } from '../../slices/bookSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { BookCard, SortButtons } from '../index'
import { AddBookCard } from '../index';

export const BooksList = () => {
  const books = useAppSelector(state => state.books.booksList);

  const dispatch = useAppDispatch();
  const bookZZZ = books.map((item) => <BookCard key={item.id} {...item}/>)

  useEffect(() => {
    if(window.localStorage.booksList) {
      if(JSON.parse(window.localStorage.getItem('booksList')).length > books.length)
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
