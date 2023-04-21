import { rest } from 'msw';
import { books } from './constants';
import { BASE_URL } from '../api/constants';
export const handlers = [
  rest.get(`${BASE_URL}/books`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(books));
  }),

  rest.get(`${BASE_URL}/books/:id`, (req, res, ctx) => {
    const { id } = req.params;

    const books = JSON.parse(window.localStorage.getItem('booksList'));
    const currentBook = books.find(item => item.id === id);
    if (currentBook) {
      return res(ctx.status(200), ctx.json(currentBook));
    }
  }),

  rest.post(`${BASE_URL}/books/add`, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.text('Книга добавлена в каталог'));
  }),

  rest.put(`${BASE_URL}/books/:id/edit`, async (req, res, ctx) => {
    const request = await req.json();
    return res(
      ctx.status(200),
      ctx.text(`Данные книги ${request.body.title} изменены`)
    );
  }),

  rest.delete(`${BASE_URL}/books/:id`, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.text('Книга удалена из каталога'));
  }),
];
