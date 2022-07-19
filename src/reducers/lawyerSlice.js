import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    lawyers: [],
    isLoading: true
}

const lawyerSlice = createSlice({
    name: 'lawyer',
    initialState,
})

// console.log(lawyerSlice)

export default lawyerSlice.reducer