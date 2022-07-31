import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const lawyersURL = 'http://localhost:3000/api/v1/lawyers'
 
const initialState = {
    lawyersData: []
}

export const fetchLawyers = createAsyncThunk('lawyer/fetchLawyers', () => {
    return fetch(lawyersURL)
    .then((resp) => resp.json())
    .catch((err) => console.log(err))
})

// export const addLawyer = createAsyncThunk('lawyer/addLawyer', () => {
//     return fetch(lawyersURL)
//     .then(res => res.json())
//     .then(lawyer => dispatch({type: 'ADD_LAWYER', payload: lawyer}))
// })

const lawyerSlice = createSlice({
    name: 'lawyer',
    initialState,
    reducers: {
//         likeLawyer: (state, action) => {
//             console.log(action)
//         },
        addLawyer: (state, action) => {
            console.log(action)
        }
    },
    extraReducers: {
        [fetchLawyers.pending]: (state) => {
            state.isLoading = true
        },
        [fetchLawyers.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.lawyers = action.payload;
        },
        [fetchLawyers.rejected]: (state) => {
            state.isLoading = false
        }
    }
})

export const { likeLawyer, addLawyer } = lawyerSlice.actions
export default lawyerSlice.reducer