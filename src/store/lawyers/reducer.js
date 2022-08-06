import { createAction, createReducer } from "@reduxjs/toolkit"

export const fetchLawyer = createAction("FETCH_LAWYERS")
console.log(fetchLawyer())

export const addLawyer = createAction("ADD_LAWYER")

createReducer([], {
    //key value pairs 
    //actions: functions (event => event handler)
    fetchLawyer: (state, action) => {
        state.push(

        )
    }
})


export default function lawReducer(state = {lawyers: []}, action) {

    switch (action.type){
        case fetchLawyer.type:
            return {lawyers: action.payload}
    case addLawyer.type:
        return {...state, lawyers: [...state.lawyers, action.payload]}

    default:
        return state

    }
}