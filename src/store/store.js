import { configureStore } from "@reduxjs/toolkit";
import { devToolsEnhancer } from "redux-devtools-extension"; 
import lawyerReducer from '../reducers/lawyerReducer';
import litigationReducer from "../reducers/litigationReducer";
import lawyersRecieved from "./lawyers";
import litigationsRecieved from "./litigations";
import api from './middleware/api'
import apiLitigations from "./middleware/apiLitigations";

let listeners = []

export function subscribe(listener) {
    listeners.push(listener)
}

export const store = configureStore (
    {reducer: {
        lawyer: lawyerReducer,
        litigation: litigationReducer,
        lawyers: lawyersRecieved,
        litigations: litigationsRecieved
    },
    middleware: [
        api,
        apiLitigations
    ]},
    devToolsEnhancer({ trace: true})
)

