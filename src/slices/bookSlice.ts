import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BooksDto } from '../types'
import type { PayloadAction } from '@reduxjs/toolkit'
import { DataService } from '../api/services/DataService'

const dataService = new DataService();

export const fetchBooks = createAsyncThunk(
    '@@books/fetchBooks',
    async () => {
        const books = await dataService.getBooks()

        return books
    }
)

interface StateProps {
    booksList: BooksDto[],
    bookInfo: string,
}

const initialState: StateProps  = {
    booksList: [],
    bookInfo: ''
}

const bookSlice = createSlice({
    name: '@@books',
    initialState,
    reducers: {
        addBooks: (state, action: PayloadAction<BooksDto[]>) => {
            state.booksList = action.payload
        },
        removeBook: (state, action) => {
            state.booksList = state.booksList.filter(item => action.payload != item.title)
        },
        getBookInfo: (state, action) => {
            
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, (state, action) => {
                
            })
            .addCase(fetchBooks.fulfilled, (state, action) => {
                state.booksList = action.payload
            })
            .addCase(fetchBooks.rejected, (state, action) => {

            })
    }
})

export const bookReducer = bookSlice.reducer;

export const {addBooks, removeBook, getBookInfo} = bookSlice.actions;