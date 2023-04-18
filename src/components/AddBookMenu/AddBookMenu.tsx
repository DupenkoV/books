import React, { useEffect, useState } from "react";
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
} from "antd";
import { Link } from "react-router-dom";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { addBook } from "../../slices/bookSlice";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { BooksDto } from "../../types";
import { nanoid } from "@reduxjs/toolkit";
import { useGetBookById } from "../../hooks/getBookById";

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
  const [newBook, setNewBook] = useState<BooksDto>({
    numberOfPages,
    title,
    publishingHouse,
    image,
    isbn,
    publishingDate,
    releaseDate,
    id,
    authors,
  });
  console.log(releaseDate);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(1);
    // dispatch(addBook(newBook))
  };

  const onFinish = (values: unknown) => {
    // if (typeof values === "object") {
    //   const newValues = { ...values } as BooksDto;
    // }
    console.log(values);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    form.setFieldValue("title", title);
    form.setFieldValue("numberOfPages", numberOfPages);
    form.setFieldValue("publishingHouse", publishingHouse);
    form.setFieldValue("isbn", isbn);
    form.setFieldValue("authors", authors);
    // form.setFieldValue("publishingDate", publishingDate);
    // form.setFieldValue("releaseDate", releaseDate);
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
        style={{ width: "100%" }}
        form={form}
      >
        <Col>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Название книги"
                name="title"
                rules={[{ required: true, message: "Введите название книги" }]}
              >
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
                    message: "Количество страниц 1-10000",
                  },
                ]}
              >
                <InputNumber />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Издательство"
                name="publishingHouse"
                rules={[
                  { required: true, message: "Введите название издательства" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Год публикации" name={"publishingDate"}>
                <DatePicker picker="year" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Дата выхода в тираж" name={"releaseDate"}>
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

        <Form.List name={"authors"} initialValue={[{ name: "", surname: "" }]}>
          {(fields, { add, remove }) => {
            return (
              <>
                <Form.Item>
                  <Button
                    type={"link"}
                    icon={<PlusOutlined />}
                    onClick={() => add()}
                  >
                    Добавить автора
                  </Button>
                </Form.Item>
                {fields.map(({ key, name }) => {
                  return (
                    <div key={key}>
                      <Form.Item
                        name={[name, "name"]}
                        label={"Имя автора"}
                        rules={[
                          { required: true, message: "Введите имя автора" },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        name={[name, "surname"]}
                        label={"Фамилия автора"}
                        rules={[
                          { required: true, message: "Введите фамилию автора" },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                      <Button
                        icon={<DeleteOutlined />}
                        onClick={() => {
                          if (fields.length > 1) {
                            remove(name);
                          } else {
                            notification.open({
                              message: "Должно быть не меньше одного автора",
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
        <Button type="primary" htmlType="submit">
          Добавить книгу
        </Button>
      </Form>
      <Link to="/">
        <Button type="primary" style={{ marginTop: 40 }}>
          Назад
        </Button>
      </Link>
    </Col>
  );
};
