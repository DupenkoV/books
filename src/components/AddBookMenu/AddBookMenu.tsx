import React, { useEffect } from 'react';
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  notification,
  Row,
} from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { addBook, editBook } from '../../slices/bookSlice';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { BooksDto } from '../../types';
import { nanoid } from '@reduxjs/toolkit';
import { useGetBookById } from '../../hooks/getBookById';
import dayjs from 'dayjs';
import { isValidIsbn } from './isbnValidationFunc';
import { NewButton } from '../LoadingImgButton';

/**
 * Компонент отвечает за меню добавления/редактирования книг. В зависимости от паарметров перехода по роутам, меняется кнопка редактировать/добавить,
 * а, также, какое событие будет диспатчится в стор. Привязка к ID параметру, который передается как параметр в URL.
 */

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
  const navigate = useNavigate();

  const button = id ? (
    <Button type="primary" htmlType="submit" style={{ marginTop: 40 }}>
      Редактировать книгу
    </Button>
  ) : (
    <Button type="primary" htmlType="submit" style={{ marginTop: 40 }}>
      Добавить книгу
    </Button>
  );

  /**
   * Функция возвращает дату, форматированную в строку. Или присваивает пустую в случаях, когда пользователь не заполнил поле даты.
   */
  const formatedDate = date => {
    return isNaN(dayjs(date).year()) ? '' : dayjs(date).year().toString();
  };
  /**
   * Функций submit. В зависимости от параметра ID, полученного из URL, выполняет несколько разную логику.
   * При отсутствующем ID выполняется формирование объекта с книгой, присвоение ID и dispatch события addBook. Присваивается картинка-заглушка.
   * При наличии ID выполняется формирование объекта с книгой и dispatch события editBook. ID остается прежним
   */
  const onFinish = (values: unknown) => {
    if (typeof values === 'object') {
      if (id.length < 1) {
        const newValues = {
          ...values,
          id: nanoid(),
        } as BooksDto;
        newValues.publishingDate = formatedDate(newValues.publishingDate);
        newValues.releaseDate = formatedDate(newValues.releaseDate);
        dispatch(
          addBook({
            ...newValues,
          })
        );
        navigate('/');
      } else {
        const newValues = { ...values, id } as BooksDto;
        newValues.publishingDate = formatedDate(newValues.publishingDate);
        newValues.releaseDate = formatedDate(newValues.releaseDate);
        dispatch(
          editBook({
            ...newValues,
          })
        );
        navigate('/');
      }
    }
  };
  useEffect(() => {
    form.setFieldValue('title', title);
    form.setFieldValue('numberOfPages', numberOfPages);
    form.setFieldValue('publishingHouse', publishingHouse);
    form.setFieldValue('isbn', isbn);
    form.setFieldValue('authors', authors);
    form.setFieldValue(
      'publishingDate',
      publishingDate && dayjs(publishingDate, 'YYYY')
    );
    form.setFieldValue(
      'releaseDate',
      releaseDate && dayjs(releaseDate, 'YYYY')
    );
  }, [
    title,
    numberOfPages,
    isbn,
    publishingHouse,
    publishingDate,
    releaseDate,
    authors,
    image,
  ]);
  return (
    <Col span={24} style={{ paddingTop: 40 }}>
      <Form
        layout="vertical"
        onFinish={onFinish}
        style={{ width: '100%' }}
        form={form}
        autoComplete="off">
        <Form.Item name="image">
          <NewButton image={image} form={form} />
        </Form.Item>
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
              <Form.Item
                label="ISBN"
                name="isbn"
                validateTrigger="onBlur"
                validateFirst={true}
                rules={[
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || isValidIsbn(value)) {
                        return Promise.resolve();
                      }
                      return Promise.reject();
                    },
                  }),
                ]}>
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Col>

        <Form.List
          name={'authors'}
          initialValue={[{ name: undefined, surname: undefined }]}>
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
