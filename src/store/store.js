import { configureStore } from "@reduxjs/toolkit";
import { devToolsEnhancer } from "redux-devtools-extension";
// import lawyerReducer from '../reducers/lawyerSlice';
// import litigationReducer from '../reducers/litigationSlice';
import lawyerReducer from '../reducers/lawyerReducer';
import litigationReducer from "../reducers/litigationReducer";


let listeners = []

export function subscribe(listener) {
    listeners.push(listener)
}

export const store = configureStore (
    {reducer: {
        lawyer: lawyerReducer,
        litigation: litigationReducer
    }},
    devToolsEnhancer({ trace: true})
)