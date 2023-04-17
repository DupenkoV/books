import { Card, Image } from 'antd';
import React from 'react';
import { BooksDto } from '../../types';
import { Button } from 'antd';
import { removeBook } from '../../slices/bookSlice'; 
import { useAppDispatch } from '../../hooks/reduxHooks';
import { Link } from 'react-router-dom'

export const BookCard: React.FC = (item: BooksDto) => {
  const {authors, numberOfPages, title, image, id} = item;
  const dispatch = useAppDispatch();

  return (
    <Card title={title} bordered={true} style={{ width: 350, height: 460 }} >
      <Image src={image} height={200} alt='book'/>
      <p>{title}</p>
      <p>{numberOfPages + " стр"}</p>
      <p>{authors[0].name}</p>
      <Link to='/addBookMenu' state={{...item}}><Button type="text">Редактировать</Button></Link>
      <Link to={`/details/${id}`}><Button type="text">Детали</Button></Link>
      <Button type="text" onClick={() => dispatch(removeBook(id))}>Удалить</Button>
    </Card>
  )
};

