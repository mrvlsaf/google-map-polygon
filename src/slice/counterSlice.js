import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'data',
    initialState: [],
    reducers: {
        addData: (state, action) => [
            state=action.payload
        ],
    },
})

export const { addData } = counterSlice.actions

export default counterSlice.reducer