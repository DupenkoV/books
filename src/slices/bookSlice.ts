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
    bookInfo: BooksDto,
}

const initialState: StateProps  = {
    booksList: [],
    bookInfo: {
        authors: [],
        numberOfPages: 0,
        title: '',
    }
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
        sortBooksByName: (state) => {
            state.booksList = state.booksList.sort((a, b) => {
                const titleA = a.title.toLowerCase();
                const titleB = b.title.toLowerCase();
                if(titleA < titleB) {
                    return -1
                }
                if(titleA > titleB) {
                    return 1
                }
                return 0
            })
        },
        // sortBooksByDate: (state) => {
        //     state.booksList = state.booksList.sort((a, b) => {
               
        //     })
        // }
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

export const {addBooks, removeBook, sortBooksByName} = bookSlice.actions;