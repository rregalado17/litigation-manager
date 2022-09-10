import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
import { apiLawyersCall } from './api'
import moment from 'moment'

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
        lawyerAdded: (lawyers, action) => {
            // lawyers.list.push({
            //     id: ++lastId,
            //     first_name: action.payload.first_name,
            //     last_name: action.payload.last_name,
            //     resolved: false
            // })
            lawyers.list.push(action.payload)
        },
        lawyerUpdated: (lawyers, action) => {
            const index = lawyers.list.findIndex(lawyer => lawyer.id === lawyer.index)
            lawyers.list[index].first_name = 'n/a'
        }
    }
})

export const fetchLawyers = () => (dispatch, getState) => {
    const { lastFetch } = getState().lawyers;

    const diffInMinutes = moment().diff(moment(lastFetch), 'minutes')
    if (diffInMinutes < 10) return;

    dispatch(
        apiLawyersCall({
            url: '/lawyers',
            onStart: lawyersRequested.type,
            onSuccess: lawyersRecieved.type,
            onError: lawyersRequestedFailed.type
        })
    );
};

export const addLawyer = lawyer => apiLawyersCall({
    url: '/lawyers',
    method: 'post',
    data: lawyer,
    onSuccess: lawyerAdded.type
})





// export const getAllLawyers = createSelector(
//     state => state.lawyer.lawyers,
//     lawyer => lawyer.lawyers
// )


export const { 
    lawyersRecieved, 
    // likeLawyer,
    lawyersRequested,
    lawyersRequestedFailed,
    lawyerUpdated,
    lawyerAdded } = slice.actions

export default slice.reducer