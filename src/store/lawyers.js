import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
import { apiLawyersCall } from './api'
import thunk from "redux-thunk" 


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
        lawyersRequestedFailed: (lawyers, action ) => {
            lawyers.loading = false;
        },
        lawyersRecieved: (lawyers, action) => {
            lawyers.list = action.payload;
            lawyers.loading = false;
            lawyers.lastFetch = Date.now()
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

export const fetchLawyers = () => (dispatch, getState) => {
    const { lastFetch } = getState().lawyers;

    console.log(lastFetch)

    dispatch(
        apiLawyersCall({
            url: '/lawyers',
            onStart: lawyersRequested.type,
            onSuccess: lawyersRecieved.type,
            onError: lawyersRequestedFailed.type
        })
    );
};

// export const fetchLawyers = () =>  
//     apiLawyersCall({
//         url: '/lawyers',
//         onStart: lawyersRequested.type,
//         onSuccess: lawyersRecieved.type,
//         onError: lawyersRequestedFailed.type
//     }
// )

// export const getAllLawyers = createSelector(
//     state => state.lawyer.lawyers,
//     lawyer => lawyer.lawyers
// )


export const { 
    lawyersRecieved, 
    likeLawyer,
    lawyersRequested,
    lawyersRequestedFailed } = slice.actions

export default slice.reducer