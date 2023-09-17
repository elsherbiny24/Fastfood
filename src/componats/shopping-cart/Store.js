

import { configureStore } from "@reduxjs/toolkit";
import Cartslice from "./Cartslice";
import Cartui from "../pages/cartitem/Cartui";
const Store = configureStore({
    reducer:{
        cart:Cartslice.reducer,
        cartui:Cartui.reducer
    }
})
export default Store