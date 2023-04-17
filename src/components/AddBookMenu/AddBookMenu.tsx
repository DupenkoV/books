import React, { useState } from 'react';
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
} from 'antd';
import { Link} from 'react-router-dom'
import { addBook } from '../../slices/bookSlice'; 
import { useAppDispatch } from '../../hooks/reduxHooks';
import { BooksDto } from '../../types';
import { nanoid } from '@reduxjs/toolkit';
import { getBookById } from '../../hooks/getBookById';


export const AddBookMenu: React.FC = () => {
  

    const {numberOfPages, title, publishingHouse, image, isbn, publishingDate, releaseDate, id, authors} = getBookById()
    const dispatch = useAppDispatch();
    const [newBook, setNewBook] = useState<BooksDto>({
        title,
        numberOfPages,
        authors,
        isbn,
        publishingHouse,
        publishingDate,
        releaseDate,
        image,
        id,
    })


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        console.log(1)
        dispatch(addBook(newBook))
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.name)
      console.log(e.target.value)
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
        <Input value={title} name='title' onChange={handleChange}/>
      </Form.Item>
      <Form.Item label="Кол-во страниц">
        <InputNumber value={numberOfPages} name='numberOfPages'/>
      </Form.Item>
      <Form.Item label="Издательство">
        <Input value={publishingHouse} name='publishingHouse' onChange={handleChange}/>
      </Form.Item>
      <Form.Item label="Год публикации">
        <DatePicker />
      </Form.Item>
      <Form.Item label="Дата выхода в тираж">
        <DatePicker />
      </Form.Item>
      <Form.Item label="ISBN">
        <Input value={isbn} name='isbn' onChange={handleChange}/>
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
