import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import Wishlistslice from "./slices/Wishlistslice";
import cartSlice from "./slices/cartSlice";

const cartStore = configureStore({
    reducer:{
        productReducer:productSlice,
        wishlistReducer:Wishlistslice,
        cartReducer:cartSlice
    }
})
export default cartStore