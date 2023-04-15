import React, { useState } from 'react';
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
} from 'antd';


export const AddBookMenu: React.FC = () => {


  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      style={{ maxWidth: 1000 }}
    >
      <Form.Item label="Название книги">
        <Input />
      </Form.Item>
      <Form.Item label="Кол-во страниц">
        <InputNumber />
      </Form.Item>
      <Form.Item label="Издательство">
        <Input />
      </Form.Item>
      <Form.Item label="Год публикации">
        <DatePicker />
      </Form.Item>
      <Form.Item label="Дата выхода в тираж">
        <DatePicker />
      </Form.Item>
      <Form.Item label="ISBN">
        <Input />
      </Form.Item>
      <Form.Item label="Авторы">
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 800 }}
        >
            <Form.Item label="Имя">
                <Input />
            </Form.Item>
            <Form.Item label="Фамилия">
                <Input />
            </Form.Item>
            <Button type='primary'>Добавить автора</Button>
        </Form>
      </Form.Item>
      <Button type='primary'>Добавить книгу</Button>
    </Form>
  );
};
