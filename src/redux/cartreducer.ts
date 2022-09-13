import {createSlice} from "@reduxjs/toolkit"

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

    }
})



export default cartSlice.reducer