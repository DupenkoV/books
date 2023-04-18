import React, { useEffect } from 'react';
import {
  Button,
  Col,
  DatePicker,
  Form,
  FormInstance,
  Input,
  InputNumber,
  notification,
  Row,
} from 'antd';
import { Link } from 'react-router-dom';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { addBook, editBook } from '../../slices/bookSlice';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { BooksDto } from '../../types';
import { nanoid } from '@reduxjs/toolkit';
import { useGetBookById } from '../../hooks/getBookById';
import moment from 'moment';
import dayjs from 'dayjs';
const ISBN = require('isbn-validate');

export const AddBookMenu: React.FC = () => {
  const {
    numberOfPages,
    title,
    publishingHouse,
    image,
    isbn,
    publishingDate,
    releaseDate,
    id,
    authors,
  } = useGetBookById();
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  const button = id ? (
    <Button type="primary" htmlType="submit" style={{ marginTop: 40 }}>
      Редактировать книгу
    </Button>
  ) : (
    <Button type="primary" htmlType="submit" style={{ marginTop: 40 }}>
      Добавить книгу
    </Button>
  );
  // const booksKeys = Object.keys(book);
  //
  // const initialBooksValues = booksKeys.map((item) => {
  //   return { name: book[item] };
  // });
  // const [newBook, setNewBook] = useState<BooksDto>({
  //   title,
  //   numberOfPages,
  //   authors,
  //   isbn,
  //   publishingHouse,
  //   publishingDate,
  //   releaseDate,
  //   image,
  //   id,
  // });
  const onFinish = (values: unknown) => {
    if (typeof values === 'object') {
      if (id.length < 1) {
        console.log(dayjs(publishingDate).toString());
        const newValues = { ...values, id: nanoid() } as BooksDto;
        dispatch(
          addBook({
            ...newValues,
            image:
              'https://dentsg.pro/upload/resize_cache/iblock/6da/cp3qr9pebsoy253ssylnab9nqdlst5ti/800_800_182890484cc09cf4497c75dc9df68fb58/SHlang-dlya-podklyucheniya-DP_2.04-dlya-mikromotora.jpg',
          })
        );
      } else {
        const newValues = { ...values, id } as BooksDto;
        dispatch(editBook({ ...newValues, image }));
      }
    }
  };

  useEffect(() => {
    console.log(dayjs(publishingDate, 'YYYY'));
    form.setFieldValue('title', title);
    form.setFieldValue('numberOfPages', numberOfPages);
    form.setFieldValue('publishingHouse', publishingHouse);
    form.setFieldValue('isbn', isbn);
    form.setFieldValue('authors', authors);
    form.setFieldValue('publishingDate', dayjs(publishingDate, 'YYYY'));
    form.setFieldValue('releaseDate', dayjs(releaseDate, 'YYYY'));
  }, [
    title,
    numberOfPages,
    isbn,
    publishingHouse,
    publishingDate,
    releaseDate,
    authors,
  ]);
  return (
    <Col span={24}>
      <Form
        layout="vertical"
        onFinish={onFinish}
        style={{ width: '100%' }}
        form={form}>
        <Col>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Название книги"
                name="title"
                rules={[
                  {
                    required: true,
                    message: 'Введите название книги(не более 30 символов)',
                    max: 30,
                  },
                ]}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Кол-во страниц"
                name="numberOfPages"
                rules={[
                  {
                    required: true,
                    message: 'Количество страниц 1-10000',
                  },
                ]}>
                <InputNumber min={1} max={10000} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Издательство"
                name="publishingHouse"
                rules={[
                  {
                    required: true,
                    message:
                      'Введите название издательства(не более 30 символов)',
                    max: 30,
                  },
                ]}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Год публикации" name={'publishingDate'}>
                <DatePicker picker="year" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Дата выхода в тираж" name={'releaseDate'}>
                <DatePicker picker="year" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="ISBN" name="isbn">
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Col>

        <Form.List name={'authors'} initialValue={[{ name: '', surname: '' }]}>
          {(fields, { add, remove }) => {
            return (
              <>
                <Form.Item>
                  <Button
                    type={'link'}
                    icon={<PlusOutlined />}
                    onClick={() => add()}>
                    Добавить автора
                  </Button>
                </Form.Item>
                {fields.map(({ key, name }) => {
                  return (
                    <div key={key}>
                      <Form.Item
                        name={[name, 'name']}
                        label={'Имя автора'}
                        rules={[
                          {
                            required: true,
                            message: 'Введите имя автора(не более 20 символов)',
                            max: 20,
                          },
                        ]}>
                        <Input />
                      </Form.Item>
                      <Form.Item
                        name={[name, 'surname']}
                        label={'Фамилия автора'}
                        rules={[
                          {
                            required: true,
                            message:
                              'Введите фамилию автора(не более 20 символов)',
                            max: 20,
                          },
                        ]}>
                        <Input />
                      </Form.Item>
                      <Button
                        icon={<DeleteOutlined />}
                        onClick={() => {
                          if (fields.length > 1) {
                            remove(name);
                          } else {
                            notification.open({
                              message: 'Должно быть не меньше одного автора',
                            });
                          }
                        }}
                      />
                    </div>
                  );
                })}
              </>
            );
          }}
        </Form.List>
        {button}
      </Form>
      <Link to="/">
        <Button type="primary" style={{ marginTop: 40 }}>
          Назад
        </Button>
      </Link>
    </Col>
  );
};
