import { Descriptions, Image, Button, Divider } from 'antd';
import { Link } from 'react-router-dom';
import { useGetBookById } from '../../hooks/getBookById';

/**
 * Компонент отображает детальную информацию о книге.
 * Детальную информацию он получает из store, предварительно сделав dispatch ID книги, который он получил из URL.
 * Понимаю, что проще и правильнее было сделать через useSelector. Подно заметил
 */

export const Details = () => {
  const {
    numberOfPages,
    title,
    publishingHouse,
    image,
    isbn,
    publishingDate,
    releaseDate,
    authors,
  } = useGetBookById();

  return (
    <>
      <Image src={image} width={200} height={300} />
      <Descriptions title={title}>
        <Descriptions.Item label="Автор">
          {authors.map(item => `${item.name} ${item.surname} | `)}
        </Descriptions.Item>
        <Descriptions.Item label="Кол-во страниц">
          {numberOfPages}
        </Descriptions.Item>
        <Descriptions.Item label="Издательский дом">
          {publishingHouse}
        </Descriptions.Item>
        <Descriptions.Item label="Год публикации">
          {releaseDate}
        </Descriptions.Item>
        <Descriptions.Item label="Дата выхода в тираж">
          {publishingDate}
        </Descriptions.Item>
        <Descriptions.Item label="ISBN">{isbn}</Descriptions.Item>
      </Descriptions>
      <Divider />
      <Link to="/">
        <Button type="primary">Назад</Button>
      </Link>
    </>
  );
};
