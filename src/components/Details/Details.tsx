import React, { useEffect } from 'react';
import { Descriptions } from 'antd';
import { BooksDto } from '../../types';

export const Details: React.FC = ({authors, title, numberOfPages, image, isbn, publishingDate, publishingHouse, releaseDate}: BooksDto) => (
        <Descriptions title={title}>
            <Descriptions.Item label="Авторы">asd</Descriptions.Item>
            <Descriptions.Item label="Кол-во страниц">{numberOfPages}</Descriptions.Item>
            <Descriptions.Item label="Издательский дом">{publishingHouse}</Descriptions.Item>
            <Descriptions.Item label="Год публикации">{releaseDate}</Descriptions.Item>
            <Descriptions.Item label="Дата выхода в тираж">{publishingDate}</Descriptions.Item>
            <Descriptions.Item label="ISBN">{isbn}</Descriptions.Item>
        </Descriptions>
)
