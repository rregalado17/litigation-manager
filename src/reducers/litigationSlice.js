import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    litigations: []
}

const litigationSlice = createSlice({
    name: 'litigation',
    initialState,
})

export default litigationSlice.reducer