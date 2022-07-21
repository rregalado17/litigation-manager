import { configureStore } from "@reduxjs/toolkit";
import lawyerReducer from '../reducers/lawyerSlice';
import litigationReducer from '../reducers/litigationSlice';

export const store = configureStore ({
    reducer: {
        lawyer: lawyerReducer,
        litigation: litigationReducer
    },
})