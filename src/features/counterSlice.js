import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

export const counterSlice = createSlice({
    name:"Counter",
    initialState,
    reducers:{
        increment:(state) =>{
            state.value += 1
        },
        decrement:(state) => {
            state.value = state.value - 1
        },
        incrementUpto:(state, action) => {
            state.value += action.payload
        }
    }
})

export const {increment, decrement, incrementUpto} = counterSlice.actions

export default counterSlice.reducer