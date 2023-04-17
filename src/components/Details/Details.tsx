import { Descriptions, Image, Button, Divider  } from 'antd';
import { useLocation, Link, useSearchParams, useParams} from 'react-router-dom'
import { AuthorType } from '../../types'
import { nanoid } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getBookDetails, addBooks } from '../../slices/bookSlice';
import { useAppSelector } from '../../hooks/reduxHooks';
import { fetchBooks } from '../../slices/bookSlice'; 

export const Details = () => {
    const {id} = useParams();
    console.log(id)
    const dispatch = useDispatch();
    console.log(useAppSelector(state => state.books.bookInfo))
    const {numberOfPages, title, publishingHouse, image, isbn, publishingDate, releaseDate} = useAppSelector(state => state.books.bookInfo)

    useEffect(() => {
        dispatch(addBooks(JSON.parse(window.localStorage.getItem('booksList'))))
        dispatch(getBookDetails(id))
    }, [])

    return (
        <>
            <Image src={image} width={200} height={300}/>
            <Descriptions title={title}>
                <Descriptions.Item label="Автор">1</Descriptions.Item>
                <Descriptions.Item label="Кол-во страниц">{numberOfPages}</Descriptions.Item>
                <Descriptions.Item label="Издательский дом">{publishingHouse}</Descriptions.Item>
                <Descriptions.Item label="Год публикации">{releaseDate}</Descriptions.Item>
                <Descriptions.Item label="Дата выхода в тираж">{publishingDate}</Descriptions.Item>
                <Descriptions.Item label="ISBN">{isbn}</Descriptions.Item>
            </Descriptions>
            <Divider />
            <Link to='/'><Button type="primary">Назад</Button></Link>
        </>
    )
}

    
    

