import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BooksDto } from '../types';
import type { PayloadAction } from '@reduxjs/toolkit';
import { DataService } from '../api/services/DataService';
import { api } from '../api/api';

const dataService = new DataService();

export const fetchBooks = createAsyncThunk('@@books/fetchBooks', async () => {
  // const books = await dataService.getBooks();
  const books = await api.get('/books');
  return books.data;
});

interface StateProps {
  booksList: BooksDto[];
  bookInfo: BooksDto;
}

const initialState: StateProps = {
  booksList: [],
  bookInfo: {
    authors: [],
    numberOfPages: 0,
    title: '',
    id: '',
  },
};

/**
 * Функция сортировк. Принимает массив книг, строку поля для сортировки и флаг направления.
 */

function sortBooks(arr: BooksDto[], prop: string, dir = false) {
  let result = arr.sort((a, b) => {
    if ((dir == false ? a[prop] < b[prop] : a[prop] > b[prop]) == true)
      return -1;
  });
  return result;
}

const bookSlice = createSlice({
  name: '@@books',
  initialState,
  reducers: {
    addBooks: (state, action: PayloadAction<BooksDto[]>) => {
      state.booksList = action.payload;
    },
    removeBook: (state, action) => {
      state.booksList = state.booksList.filter(
        item => action.payload != item.id
      );
    },
    sortBooksState: (state, action) => {
      state.booksList = sortBooks(
        state.booksList,
        action.payload.prop,
        action.payload.dir
      );
    },
    addBook: (state, action) => {
      state.booksList.push(action.payload);
    },
    getBookDetails: (state, action) => {
      state.bookInfo = state.booksList.find(item => item.id === action.payload);
    },
    editBook: (state, action) => {
      state.booksList = state.booksList.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...action.payload,
          };
        }
        return item;
      });
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchBooks.pending, (state, action) => {})
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.booksList = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {});
  },
});

export const bookReducer = bookSlice.reducer;

export const {
  addBooks,
  removeBook,
  sortBooksState,
  addBook,
  getBookDetails,
  editBook,
} = bookSlice.actions;
