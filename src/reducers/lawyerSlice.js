import { createSlice } from '@reduxjs/toolkit'
import lawyersData from '../data/lawyersData'
 
const initialState = {
    lawyersData: lawyersData,
    firstName: 'Tom',
    isLoading: true
}

const lawyerSlice = createSlice({
    name: 'lawyer',
    initialState,
    reducers: {
        likeLawyer: (state, action) => {
            console.log(action)
        } 
    }
})

export const {likeLawyer} = lawyerSlice.actions
export default lawyerSlice.reducer