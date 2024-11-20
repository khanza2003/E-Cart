import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//action return promise
export const fetchProducts=createAsyncThunk("products/fetchProducts",async()=>{
    const result=await axios.get("https://dummyjson.com/products")
    //console.log(result.data.products);
    sessionStorage.setItem("allProducts",JSON.stringify(result.data.products))
    return result.data.products
})
const productSlice = createSlice({
    name:'products',
    initialState:{
        allProducts:[],
        dummyallProduct:[],
        loading:false,
        errormsg:""
    },
    reducers:{
        searchProduct:(state,actionByHeader)=>{
            state.allProducts=state.dummyallProduct.filter(item=>item.title.toLowerCase().includes(actionByHeader.payload))
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,apiResult)=>{
            state.allProducts=apiResult.payload
            state.dummyallProduct=apiResult.payload
            state.loading=false
            state.errormsg=""
        })
        builder.addCase(fetchProducts.pending,(state)=>{
            state.allProducts=[]
            state.dummyallProduct=[]
            state.loading=true
            state.errormsg=""
        })
        builder.addCase(fetchProducts.rejected,(state)=>{
            state.allProducts=[]
            state.allProducts=[]
            state.loading=false
            state.errormsg="API Call Failed"
        })
    }
})
export const {searchProduct}=productSlice.actions
export default productSlice.reducer