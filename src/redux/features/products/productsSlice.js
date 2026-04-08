import { createSlice } from "@reduxjs/toolkit";

    const initialState = {
  items: [],
  loading: false,
  error: null,
  cards:[]
}

const ProductsSlice = createSlice({
    name:"ProductsSlice",
    initialState,
     reducers:{

    }

})