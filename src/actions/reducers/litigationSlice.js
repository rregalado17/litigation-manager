import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const litigationsURL = 'http://localhost:3000/api/v1/litigations'

const initialState = {
    litData: [],
}

export const fetchLitigations = createAsyncThunk('litigation/fetchLitigations', () => {
    return fetch(litigationsURL)
    .then((resp) => resp.json())
    .catch((err) => console.log(err))
})

const litigationSlice = createSlice({
    name: 'litigation',
    initialState,
    extraReducers: {
        [fetchLitigations.pending]: (state) => {
            state.isLoading = true 
        },
        [fetchLitigations.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.litigations = action.payload;
        },
        [fetchLitigations.rejected]: (state) => {
            state.isLoading = false
        }
    }
})



// console.log(litigationSlice)

export default litigationSlice.reducer