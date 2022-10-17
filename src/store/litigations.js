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
            litigations.array.push(action.payload)
            console.log(action.payload)
            console.log("2.1")

        },
        litigationDeleted: (litigations, action) => {
            console.log(action.payload)
            const { id } = action.payload
            console.log("11")
            return litigations.array = litigations.array.filter(litigation => litigation.id !== id)
        },
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

export const updateLitigation = litigations  => apiLitigationsCall({
    url: '/litigations/' + litigations.id,
    method: 'patch',
    data: litigations,
    onSuccess: litigationUpdated.type
})

export const deleteLitigation = litigations => apiLitigationsCall({
    url: '/litigations/' + litigations.id,
    method: 'delete',
    data: litigations,
    onSuccess: litigationDeleted.type
})

export const { 
    litigationsRequested,
    litigationsRequestedFailed,
    litigationsRecieved, 
    litigationAdded,
    litigationUpdated,
    litigationDeleted } = slice.actions

export default slice.reducer









// export const fetchLitigations = () =>  apiLitigationsCall({
//     url: '/litigations',
//     onSuccess: litigationsRecieved.type
// })
