import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './reduxHooks';
import { addBooks, getBookDetails } from '../slices/bookSlice';
import { nanoid } from '@reduxjs/toolkit';



export const useGetBookById = () => {
    
    const {id} = useParams();
    if(id === 'addNewBook') return ({
        title: '',
        numberOfPages: 13,
        authors: [{name: 's', surname: 'a'}],
        isbn: '',
        publishingHouse: '',
        publishingDate: '',
        releaseDate: '',
        image: '',
        id: nanoid()
    })
    const book = useAppSelector(state => state.books.bookInfo)
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(addBooks(JSON.parse(window.localStorage.getItem('booksList'))))
        dispatch(getBookDetails(id))
    }, [])
    return book;
}