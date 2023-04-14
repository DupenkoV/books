import { Card } from 'antd';
import React from 'react';
import { BooksDto } from '../../types';
import { Button } from 'antd';
import { removeBook } from '../../slices/bookSlice'; 
import { useAppDispatch } from '../../hooks/reduxHooks';

export const BookCard: React.FC = ({ numberOfPages, title, authors, image }: BooksDto) => {
  const dispatch = useAppDispatch();

  return (
    <Card title={title} bordered={true} style={{ width: 350 }} >
    <div style={{ height: "200px" }}><img src={image} style={{ height: '100%' }} /></div>
    <p>{title}</p>
    <p>{numberOfPages + " стр"}</p>
    <p>{authors[0].name}</p>
    <Button type="text">Редактировать</Button>
    <Button type="text">Детали</Button>
    <Button type="text" onClick={() => dispatch(removeBook(title))}>Удалить</Button>
  </Card>
  )
};

