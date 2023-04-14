import { Card, Image } from 'antd';
import React from 'react';
import { BooksDto } from '../../types';
import { Button } from 'antd';
import { removeBook } from '../../slices/bookSlice'; 
import { useAppDispatch } from '../../hooks/reduxHooks';
import { Link } from 'react-router-dom'

export const BookCard: React.FC = (item: BooksDto) => {
  const {authors, numberOfPages, title, image} = item;
  const dispatch = useAppDispatch();

  return (
    <Card title={title} bordered={true} style={{ width: 350 }} >
      <Image src={image} height={200} alt='book'/>
      <p>{title}</p>
      <p>{numberOfPages + " стр"}</p>
      <p>{authors[0].name}</p>
      <Button type="text">Редактировать</Button>
      <Link to='/details' state={{...item}}><Button type="text">Детали</Button></Link>
      <Button type="text" onClick={() => dispatch(removeBook(title))}>Удалить</Button>
    </Card>
  )
};

