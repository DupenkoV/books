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

export const AddBookMenu: React.FC = () => {
    const bookDetails = useLocation()
    const dispatch = useAppDispatch();

    const handleSubmit = (e: React.FormEvent) => {

        const formData = new FormData(e.target as HTMLFormElement)
        console.log(formData.get('title'))

    }

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      style={{ maxWidth: 1000 }}
      onFinish={handleSubmit}
    >
      <Form.Item label="Название книги" >
        <Input value={bookDetails?.state?.title} />
      </Form.Item>
      <Form.Item label="Кол-во страниц">
        <InputNumber value={bookDetails?.state?.numberOfPages}/>
      </Form.Item>
      <Form.Item label="Издательство">
        <Input value={bookDetails?.state?.publishingHouse}/>
      </Form.Item>
      <Form.Item label="Год публикации">
        <DatePicker />
      </Form.Item>
      <Form.Item label="Дата выхода в тираж">
        <DatePicker />
      </Form.Item>
      <Form.Item label="ISBN">
        <Input value={bookDetails?.state?.isbn}/>
      </Form.Item>
      <Form.Item label="Авторы">
        <Input />
      </Form.Item>
      <Button type='primary' htmlType="submit">Добавить книгу</Button>
    </Form>
  );
};
