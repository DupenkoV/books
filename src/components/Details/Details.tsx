import React, { useEffect, useState } from 'react';
import { Descriptions } from 'antd';
import { BooksDto } from '../../types';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { useLocation } from 'react-router-dom'
import { getBookInfo } from '../../slices/bookSlice';

export const Details: React.FC = () => {
    const title = useLocation();
    const dispatch = useAppDispatch()
    const [book, setBook] = useState('');


    return (
        <Descriptions title={1}>
            <Descriptions.Item label="Авторы">asd</Descriptions.Item>
            <Descriptions.Item label="Кол-во страниц">1</Descriptions.Item>
            <Descriptions.Item label="Издательский дом">1</Descriptions.Item>
            <Descriptions.Item label="Год публикации">1</Descriptions.Item>
            <Descriptions.Item label="Дата выхода в тираж">1</Descriptions.Item>
            <Descriptions.Item label="ISBN">1</Descriptions.Item>
        </Descriptions>
    )
}

    
    

