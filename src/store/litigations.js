import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
import { apiLitigationsCall } from './api'
import moment from 'moment'
import lawyers from './lawyers'

const slice = createSlice({
    name: 'litigations',
    initialState: {
        array: [],
        loading: false,
        lastFetch: null
    },
    reducers: {
        litigationsRequested: (litigations, action) => {
            litigations.loading = true;
        },
        litigationsRequestedFailed: (litigations, action) => {
            litigations.loading = false;
        },
        litigationsRecieved: (litigations, action) => {
            litigations.array = action.payload;
            litigations.loading = false;
            
        },
        litigationAdded: (litigations, action) => {
            litigations.array.push({
                lawyer_id: 2, 
                caption: "USA v. China", 
                court: 'SDNY', 
                status: 'Active'
            })
            
        }
    }
})

export const fetchLitigations = () => (dispatch, getState ) => {
    const { lastFetch } = getState().litigations;

    const diffInMinutes = moment().diff(moment(lastFetch), 'minutes')
    if (diffInMinutes < 10 ) return;

    dispatch(
        apiLitigationsCall({
            url: '/litigations',
            onStart: litigationsRequested.type,
            onSuccess: litigationsRecieved.type,
            onError: litigationsRequestedFailed,
        })
    )
}

// export const fetchLitigations = () =>  apiLitigationsCall({
//     url: '/litigations',
//     onSuccess: litigationsRecieved.type
// })

export const addLitigation = litigation => apiLitigationsCall({
    url: '/litigations',
    method: 'post',
    data: litigation,
    onSuccess: litigationAdded.type
})

export const { 
    litigationsRequested,
    litigationsRequestedFailed,
    litigationsRecieved, 
    litigationAdded } = slice.actions

export default slice.reducer