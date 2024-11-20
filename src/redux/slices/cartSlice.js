import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cartSlice',
    initialState:[],
    reducers:{
        addToCart:(state,actionByComponent)=>{
            const existingProduct=state.find(item=>item.id==actionByComponent.payload.id)
            if(existingProduct){
                existingProduct.quantity++
                existingProduct.totalPrice=existingProduct.quantity*existingProduct.price
                const remainingProduct=state.filter(item=>item.id!=existingProduct.id)
                state=[...remainingProduct,existingProduct]
            }else{
                state.push({...actionByComponent.payload,quantity:1,totalPrice:actionByComponent.payload.price})
            }
        },
        incrementQuantity:(state,actionByCart)=>{
            const existingProduct=state.find(item=>item.id==actionByCart.payload)
            existingProduct.quantity++
            existingProduct.totalPrice=existingProduct.price*existingProduct.quantity
            const remainingProduct=state.filter(item=>item.id!=existingProduct.id)
            state=[...remainingProduct,existingProduct]
        },
        decrementQuantity:(state,actionByCart)=>{
            const existingProduct=state.find(item=>item.id==actionByCart.payload)
            existingProduct.quantity--
            existingProduct.totalPrice=existingProduct.price*existingProduct.quantity
            const remainingProduct=state.filter(item=>item.id!=existingProduct.id)
            state=[...remainingProduct,existingProduct]
        },
        removeItem:(state,actionByCart)=>{
            return state.filter(item=>item.id!=actionByCart.payload)
        },
        emptyCart:(state)=>{
           return state=[]
        }

    }
})
export const {addToCart,incrementQuantity,decrementQuantity,removeItem,emptyCart}=cartSlice.actions
export default cartSlice.reducer