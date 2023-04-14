import { Card } from 'antd';
import React from 'react';
import { BooksDto } from '../../types';
import { Button } from 'antd';

export const BookCard: React.FC = ({ numberOfPages, title, authors, image }: BooksDto) => (
  <Card title={title} bordered={true} style={{ width: 350 }} >
    <div style={{ height: "200px" }}><img src={image} style={{ height: '100%' }} /></div>
    <p>{title}</p>
    <p>{numberOfPages + " стр"}</p>
    <p>{authors[0].name}</p>
    <Button type="text">Редактировать</Button>
    <Button type="text">Детали</Button>
    <Button type="text">Удалить</Button>
  </Card>
);

