import React, { useState } from 'react';
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
} from 'antd';
import { useLocation, Link} from 'react-router-dom'
import { addBook } from '../../slices/bookSlice'; 
import { useAppDispatch } from '../../hooks/reduxHooks';
import { BooksDto } from '../../types';
import { nanoid } from '@reduxjs/toolkit';

export const AddBookMenu: React.FC = () => {
    const bookDetails = useLocation()
    const [newBook, setNewBook] = useState<BooksDto>({
        title: bookDetails?.state?.title || '',
        numberOfPages: bookDetails?.state?.numberOfPages || 13,
        authors: bookDetails?.state?.authors || [{name: 's', surname: 'a'}],
        isbn: bookDetails?.state?.isbn || '',
        publishingHouse: bookDetails?.state?.publishingHouse || '',
        publishingDate: bookDetails?.state?.publishingDate || '',
        releaseDate: bookDetails?.state?.releaseDate || '',
        image: bookDetails?.state?.image || '',
        id: bookDetails?.state?.image || nanoid()
    })
    const dispatch = useAppDispatch();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        console.log(1)
        dispatch(addBook(newBook))
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        setNewBook({...newBook, [e.target.name]: e.target.value})
    }

  return (
    <>
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      style={{ maxWidth: 1000 }}
      onFinish={handleSubmit}
    >
      <Form.Item label="Название книги" >
        <Input value={newBook.title} name='title' onChange={handleChange}/>
      </Form.Item>
      <Form.Item label="Кол-во страниц">
        <InputNumber value={newBook.numberOfPages} name='numberOfPages'/>
      </Form.Item>
      <Form.Item label="Издательство">
        <Input value={newBook.publishingHouse} name='publishingHouse' onChange={handleChange}/>
      </Form.Item>
      <Form.Item label="Год публикации">
        <DatePicker />
      </Form.Item>
      <Form.Item label="Дата выхода в тираж">
        <DatePicker />
      </Form.Item>
      <Form.Item label="ISBN">
        <Input value={newBook.isbn} name='isbn' onChange={handleChange}/>
      </Form.Item>
      <Form.Item label="Авторы">
        <Input value={newBook.authors.join()} name='authors' onChange={handleChange}/>
      </Form.Item>
      <Button type='primary' htmlType="submit">Добавить книгу</Button>
    </Form>
    <Link to='/'><Button type="primary" style={{marginTop: 40}}>Назад</Button></Link>
 
    </>
    );
};
