import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
import { apiLitigationsCall } from './api'

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
        },
        litigationAdded: (litigations, action) => {
            litigations.array.push(action.payload)
        }
    }
})

export const fetchLitigations = () =>  apiLitigationsCall({
    url: '/litigations',
    onSuccess: litigationsRecieved.type
})

export const addLitigation = litigation => apiLitigationsCall({
    url: '/litigations',
    method: 'post',
    data: litigation,
    onSuccess: litigationAdded.type
})




export const { 
    litigationsRecieved, 
    litigationAdded } = slice.actions
export default slice.reducer