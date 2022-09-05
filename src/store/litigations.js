import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
import { apiLitigationsCall } from './api'

let lastId = 0; 

const slice = createSlice({
    name: 'litigations',
    initialState: {
        array: [],
        loading: false,
        lastFetch: null
    },
    reducers: {
        litigationsRecieved: (litigations, action) => {
            litigations.array = action.payload;
        }
    }
})

export const fetchLitigations = () =>  apiLitigationsCall({
    url: '/litigations',
    onSuccess: litigationsRecieved.type
})

export const { litigationsRecieved } = slice.actions
export default slice.reducer