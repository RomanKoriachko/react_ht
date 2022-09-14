import {createSlice} from "@reduxjs/toolkit"
import { omit } from "lodash"

type State = {
    [id: number]:number
}

const initialState:State = {
    1:5,
    2:5,
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        decrementItem: (state, action) => ({
            ...state,
            [action.payload]: state[action.payload] - 1
        }),
        incrementItem: (state, action) => ({
            ...state,
            [action.payload]: state[action.payload] + 1
        }),
        removeItem: (state, action) => (
            omit(state, [action.payload])
        ),
        addItem: (state, action) => ({
            ...state,
            [action.payload]: state[action.payload]
        })
    }
})

export const {decrementItem, incrementItem, removeItem, addItem} = cartSlice.actions

export default cartSlice.reducer
