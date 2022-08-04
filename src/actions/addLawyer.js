// import { ADD_LAWYER } from "../actionTypes";
// import { createAsyncThunk } from '@reduxjs/toolkit'

const lawyersURL = 'http://localhost:3000/api/v1/lawyers'

// export const addLawyer = createAsyncThunk('lawyer/addLawyer', () => {
//     return fetch(lawyersURL)
//     .then(res => res.json())
//     .then(lawyer => dispatch({type: 'ADD_LAWYER', payload: lawyer}))
// })

export function addLawyer (data) {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/lawyers', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data) 
        })
        .then(res => res.json())
        .then(lawyer => dispatch({type: 'ADD_LAWYER', payload: lawyer}))
    }
}