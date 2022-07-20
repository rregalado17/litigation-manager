import { createSlice } from '@reduxjs/toolkit'
import litData from '../data/litData'

const initialState = {
    litigations: litData,
}

const litigationSlice = createSlice({
    name: 'litigation',
    initialState,
})

// console.log(litigationSlice)

export default litigationSlice.reducer