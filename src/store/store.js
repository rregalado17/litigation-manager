import { configureStore } from "@reduxjs/toolkit";
// import lawyerReducer from '../reducers/lawyerSlice';
// import litigationReducer from '../reducers/litigationSlice';
import lawyerReducer from '../reducers/lawyerReducer';
import litigationReducer from "../reducers/litigationReducer";



export const store = configureStore ({
    reducer: {
        lawyer: lawyerReducer,
        litigation: litigationReducer
    },
})