import { Descriptions, Image, Button, Divider  } from 'antd';
import { useLocation, Link} from 'react-router-dom'
import { AuthorType } from '../../types'

export const Details = () => {
    const titleName = useLocation();

    const { authors, numberOfPages, title, image, isbn, publishingDate, publishingHouse, releaseDate } = titleName.state;
    const authorsName = authors.map(item => <span>{item.name + ' ' + item.surname}</span>)
    return (
        <>
            <Image src={image} width={200} height={300}/>
            <Descriptions title={title}>
                <Descriptions.Item label="Автор">{authorsName}</Descriptions.Item>
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

    
    

