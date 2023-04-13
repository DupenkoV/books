import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BooksDto } from '../types'
import type { PayloadAction } from '@reduxjs/toolkit'


// export const fetchBooks = createAsyncThunk(
//     '@@books/fetchBooks',
//     async function() {
//         const response = await 
//     }
// )

const initialState: BooksDto[]  = []

const bookSlice = createSlice({
    name: '@@books',
    initialState,
    reducers: {
        addBooks: (state, action: PayloadAction<BooksDto[]>) => {
            return state = action.payload
        }
    },
    extraReducers: {

    }
})

export const bookReducer = bookSlice.reducer;

export const {addBooks} = bookSlice.actions;