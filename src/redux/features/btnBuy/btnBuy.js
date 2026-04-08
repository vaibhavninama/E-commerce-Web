import {createSlice} from '@reduxjs/toolkit';
import { add } from 'firebase/firestore/pipelines';

 const initialState = {
    isBuy:[]
 }

const btnBuySlice = createSlice({
    name:'btnBuy',
    initialState,
    reducers:{
        addBuy:(state,action)=>{
            state.isBuy = [action.payload]
        },
        clearAll: (state) => {
      state.isBuy = []
       }

    }
})

export const {addBuy, clearAll} = btnBuySlice.actions

export default btnBuySlice.reducer