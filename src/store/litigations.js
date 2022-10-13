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
            litigations.array.push(action.payload)
            
        },
        litigationUpdated: (litigations, action) => {
            // litigations.array.push({
            //     id: action.payload.id
            // })
            litigations.array.push(action.payload)
        // addLawyer: (lawyers, action) => {
        //     lawyers.push({
        //         id: lastId++,
        //         name: action.payload.name
        //     })
        // } 
            
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

export const addLitigation = litigation => apiLitigationsCall({
    url: '/litigations',
    method: 'post',
    data: litigation,
    onSuccess: litigationAdded.type
})  

export const updateLitigation = litigation  => apiLitigationsCall({
    url: '/litigations/' + litigation.id,
    method: 'patch',
    data: litigation,
    onSuccess: litigationAdded.type
})

export const { 
    litigationsRequested,
    litigationsRequestedFailed,
    litigationsRecieved, 
    litigationAdded,
    litigationUpdated } = slice.actions

export default slice.reducer









// export const fetchLitigations = () =>  apiLitigationsCall({
//     url: '/litigations',
//     onSuccess: litigationsRecieved.type
// })
