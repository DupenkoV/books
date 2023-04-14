import { BooksList } from '../BooksList/BooksList';
import { Routes, Route, Link } from 'react-router-dom'
import { Details } from '../Details';



export const App = () => {


  return (
    <Routes>
      <Route path='/' element={<BooksList />} />
      <Route path='/details' element={<Details />} />
    </Routes>
  );
};
