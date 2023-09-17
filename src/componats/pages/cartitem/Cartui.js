import { createSlice } from "@reduxjs/toolkit";

const Cartui = createSlice({
    name:'cartui',
    initialState: {cartVisible : false},
    reducers:{
        toggle(state){
            state.cartVisible = !state.cartVisible
        }
    }
})
export const CartuiActions = Cartui.actions
export default Cartui