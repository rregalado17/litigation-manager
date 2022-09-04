import { configureStore } from "@reduxjs/toolkit";
import { devToolsEnhancer } from "redux-devtools-extension"; 
import lawyerReducer from '../reducers/lawyerReducer';
import litigationReducer from "../reducers/litigationReducer";
import lawReducer from './lawyers/reducer'
import api from './middleware/api'

let listeners = []

export function subscribe(listener) {
    listeners.push(listener)
}

export const store = configureStore (
    {reducer: {
        lawyer: lawyerReducer,
        litigation: litigationReducer,
        // law: lawReducer
    },
    middleware: [
        api
    ]},
    devToolsEnhancer({ trace: true})
)

