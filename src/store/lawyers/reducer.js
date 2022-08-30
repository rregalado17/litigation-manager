import { createAction, createReducer } from "@reduxjs/toolkit"

export const fetchLawyer = createAction("FETCH_LAWYERS")
// console.log(fetchLawyer())

const lawyersURL = 'http://localhost:3000/api/v1/lawyers'

// export const addLawyer = createAction("ADD_LAWYER")

// export const addLawyer = createAsyncThunk('lawyer/addLawyer', () => {
//     return fetch(lawyersURL)
//     .then(res => res.json())
//     .then(lawyer => dispatch({type: 'ADD_LAWYER', payload: lawyer}))
// })



createReducer([], {
    fetchLawyer: (state, action) => {
        state.push(

        )
    }
})


export default function lawReducer(state = {lawyers: []}, action) {

    switch (action.type){
        case fetchLawyer.type:
            return {lawyers: action.payload}
    // case addLawyer.type:
    //     return {...state, lawyers: [...state.lawyers, action.payload]}

    default:
        return state

    }
}