import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
import { apiLawyersCall } from './api'

let lastId = 0; 

const slice = createSlice({
    name: 'lawyers',
    initialState: {
        list: [],
        loading: false,
        lastFetch: null
    },
    reducers: {
        lawyersRequested: (lawyers, action) => {
            lawyers.loading = true;
        },
        lawyersRecieved: (lawyers, action) => {
            lawyers.list = action.payload;
            lawyers.loading = false;
        },
        // likeLawyer: (state, action) => {
        //     console.log(action)
        // },
        // addLawyer: (lawyers, action) => {
        //     lawyers.push({
        //         id: lastId++,
        //         name: action.payload.name
        //     })
        // }
    }
})

export const fetchLawyers = () =>  apiLawyersCall({
    url: '/lawyers',
    onStart: lawyersRequested.type,
    onSuccess: lawyersRecieved.type
})

// export const getAllLawyers = createSelector(
//     state => state.lawyer.lawyers,
//     lawyer => lawyer.lawyers
// )


export const { 
    lawyersRecieved, 
    likeLawyer,
    lawyersRequested } = slice.actions
export default slice.reducer