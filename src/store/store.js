import { configureStore } from "@reduxjs/toolkit";
import { devToolsEnhancer } from "redux-devtools-extension"; 
import lawyersRecieved from "./lawyers";
import litigationsRecieved from "./litigations";
import api from './middleware/api'
import apiLitigations from "./middleware/apiLitigations";
import thunk from "redux-thunk" 

let listeners = []

export function subscribe(listener) {
    listeners.push(listener)
}

export const store = configureStore (
    {reducer: {
        lawyers: lawyersRecieved,
        litigations: litigationsRecieved
    },
    middleware: [
        api,
        apiLitigations,
        thunk,
    ]},
    devToolsEnhancer({ trace: true})
)
