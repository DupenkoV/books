import { Card, Button } from 'antd';
import { Link } from 'react-router-dom';

/**
 * Компонент отвечает за рендеринг карточки добавления книги
 */

export const AddBookCard = () => {
  return (
    <>
      <Card bordered={true} style={{ width: 350, height: 460 }}>
        <Link to="/addBookMenu/addNewBook">
          <Button type="primary">Добавить книгу</Button>
        </Link>
      </Card>
    </>
  );
};
