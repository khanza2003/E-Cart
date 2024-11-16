import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import Wishlistslice from "./slices/Wishlistslice";

const cartStore = configureStore({
    reducer:{
        productReducer:productSlice,
        wishlistReducer:Wishlistslice
    }
})
export default cartStore