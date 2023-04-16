import { Card, Button } from 'antd'
import { Link } from 'react-router-dom'

export const AddBookCard = () => {
  return (
    <>
        <Card bordered={true} style={{ width: 350, height: 460 }}>
            <Link to='/addBookMenu'><Button type="primary">Добавить книгу</Button></Link>
        </Card>
    </>
    
  )
}
