import { Card } from 'antd';
import React from 'react';
import { BooksDto } from '../../types';

const BookCard: React.FC = ({ numberOfPages, title, authors, image }: BooksDto) => (
  <Card title={title} bordered={true} style={{ width: 300 }}>
    <div style={{ height: "200px" }}><img src={image} style={{ height: '100%' }} /></div>
    <p>{title}</p>
    <p>{numberOfPages}</p>
    <p>{authors[0].name}</p>
  </Card>
);

export default BookCard; 