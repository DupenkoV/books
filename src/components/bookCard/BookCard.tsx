import { Card, Image, notification } from 'antd';
import React from 'react';
import { BooksDto } from '../../types';
import { Button } from 'antd';
import { removeBook } from '../../slices/bookSlice';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { Link } from 'react-router-dom';
import { api } from '../../api/api';

/**
 * Компонент отвечает за формирование карточки книги
 */

export const BookCard: React.FC = (item: BooksDto) => {
  const { authors, numberOfPages, title, image, id } = item;
  const dispatch = useAppDispatch();

  const handleRemoveBook = async (id: string) => {
    try {
      const response = await api.delete(`/books/${id}`);
      if (response.status === 200) {
        dispatch(removeBook(id));

        notification.open({ message: response.data });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Card title={title} bordered={true} style={{ width: 350, height: 460 }}>
      <Image src={image} height={200} max-width={300} alt="book" />
      <p>{title}</p>
      <p>{numberOfPages + ' стр'}</p>
      <p>{`${authors[0].name} ${authors[0].surname}`}</p>
      <Link to={`/addBookMenu/${id}`}>
        <Button type="text">Редактировать</Button>
      </Link>
      <Link to={`/details/${id}`}>
        <Button type="text">Детали</Button>
      </Link>
      <Button type="text" onClick={() => handleRemoveBook(id)}>
        Удалить
      </Button>
    </Card>
  );
};
