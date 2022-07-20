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
})


export default lawyerSlice.reducer