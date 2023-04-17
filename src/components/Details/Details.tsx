import { Descriptions, Image, Button, Divider  } from 'antd';
import { Link, useParams} from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getBookDetails, addBooks } from '../../slices/bookSlice';
import { useAppSelector } from '../../hooks/reduxHooks';
import { getBookById } from '../../hooks/getBookById'; 


export const Details = () => {

    const {numberOfPages, title, publishingHouse, image, isbn, publishingDate, releaseDate} = getBookById()


    return (
        <>
            <Image src={image} width={200} height={300}/>
            <Descriptions title={title}>
                <Descriptions.Item label="Автор">1</Descriptions.Item>
                <Descriptions.Item label="Кол-во страниц">{numberOfPages}</Descriptions.Item>
                <Descriptions.Item label="Издательский дом">{publishingHouse}</Descriptions.Item>
                <Descriptions.Item label="Год публикации">{releaseDate}</Descriptions.Item>
                <Descriptions.Item label="Дата выхода в тираж">{publishingDate}</Descriptions.Item>
                <Descriptions.Item label="ISBN">{isbn}</Descriptions.Item>
            </Descriptions>
            <Divider />
            <Link to='/'><Button type="primary">Назад</Button></Link>
        </>
    )
}

    
    

