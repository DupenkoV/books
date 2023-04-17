import { BooksList } from '../BooksList/BooksList';
import { Routes, Route, Link } from 'react-router-dom'
import { Details } from '../Details';
import { Layout } from '../Layout';
import { AddBookMenu } from '../index'



export const App = () => {


  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<BooksList />} />
        <Route path='details/:id' element={<Details />} />
        <Route path='addBookMenu' element={<AddBookMenu />} />
      </Route>
    </Routes>
  );
};
