import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchData = createAsyncThunk('test/fetchData', async (url: string) => {
    const response = await axios.get(url)
    return response.data
})

const testSlice = createSlice({
    name: 'test',
    initialState: {
        loading: false,
        data: [],
        error: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
        })
        builder.addCase(fetchData.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message!
        })
    },
})

export default testSlice.reducer
