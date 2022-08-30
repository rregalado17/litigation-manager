import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const lawyersURL = 'http://localhost:3000/api/v1/lawyers'
 
const initialState = {
    lawyersData: [],
    lastId: 0
}

export const fetchLawyers = createAsyncThunk('lawyer/fetchLawyers', () => {
    return fetch(lawyersURL)
    .then((resp) => resp.json())
    .catch((err) => console.log(err))
})

// export const addLawyer = createAsyncThunk('lawyer/addLawyer', (data) => {
//     return (dispatch) => {
//         fetch('http://localhost:3000/api/v1/lawyers', {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             },
//             method: 'POST',
//             body: JSON.stringify(data) 
//         })
//         .then(res => res.json())
//        .then(lawyer => dispatch({type: actions.ADD_LAWYER, payload: lawyer}))
//     }
// })
 
// export const addLawyer = createAsyncThunk('lawyer/addLawyer', () => {
//     return fetch(lawyersURL)
//     .then(res => res.json())
//     .then(lawyer => dispatch({type: 'ADD_LAWYER', payload: lawyer}))
// })

const lawyerSlice = createSlice({
    name: 'lawyer',
    initialState,
    reducers: {
        likeLawyer: (state, action) => {
            console.log(action)
        },
        // addLawyer: (lawyers, action) => {
        //     lawyers.push({
        //         id: lastId++,
        //         name: action.payload.name
        //     })
        // }
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
// console.log(lawyerSlice)
export const { likeLawyer } = lawyerSlice.actions
export default lawyerSlice.reducer