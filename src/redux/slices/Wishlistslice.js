import { createSlice } from "@reduxjs/toolkit";

const wishlistslice=createSlice({
    name:'wishlists',
    initialState:[],
    reducers:{ //for defining action
        //action-name:reducer function
        addToWishlist:(state,actionFromView)=>{
            state.push(actionFromView.payload)
        },
        removeItem:(state,actionFromWishlist)=>{
           return state.filter(item=>item.id!=actionFromWishlist.payload)
        }
    }

})
export const {addToWishlist,removeItem}=wishlistslice.actions
export default wishlistslice.reducer