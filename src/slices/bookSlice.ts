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

const initialState: BooksDto[]  = []

const bookSlice = createSlice({
    name: '@@books',
    initialState,
    reducers: {
        addBooks: (state, action: PayloadAction<BooksDto[]>) => {
            state = action.payload
            window.localStorage.books = JSON.stringify(state)
            return state
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, (state, action) => {
                
            })
            .addCase(fetchBooks.fulfilled, (state, action) => {
                return state = action.payload
            })
            .addCase(fetchBooks.rejected, (state, action) => {

            })
    }
})

export const bookReducer = bookSlice.reducer;

export const {addBooks} = bookSlice.actions;