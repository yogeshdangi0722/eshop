import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

const url = 'https://fakestoreapi.com/products';

export const getProducts = createAsyncThunk('cart/getCartItems', async () => {
  return fetch(url)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});

const initialState={
    isLoading:false,
    productList:[], 
    error:''
}

const fetchProduct = createSlice({
    name:'getProduct',
    initialState,
    extraReducers:(builder)=> {
        builder
        .addCase( getProducts.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(
        getProducts.fulfilled, (state, action) => {
          state.isLoading = false;
          state.productList = action.payload;
        })
        .addCase(
        getProducts.rejected, (state) => {
          state.isLoading = false;
        })
      },
})


export default fetchProduct.reducer;
