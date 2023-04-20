import { BooksList } from '../BooksList/BooksList';
import { Routes, Route } from 'react-router-dom';
import { Details } from '../Details';
import { Layout } from '../Layout';
import { AddBookMenu } from '../index';
import { worker } from '../../mocks/browser';
import { BASE_URL } from '../../api/constants';

export const App = () => {
  worker.start();
  fetch(`${BASE_URL}/books`).then(res => console.log(res.json()));
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<BooksList />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="addBookMenu/:id" element={<AddBookMenu />} />
      </Route>
    </Routes>
  );
};
