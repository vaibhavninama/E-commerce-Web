import {createSlice} from '@reduxjs/toolkit'
import { act } from 'react'


const initialState ={
  
  user: null,
  isLoggedIn: false,
  loading: false,
  error: null


}

const AuthSlice =createSlice({
    name:'AuthSlice',
    initialState,

    reducers:({
      
         loadingStart:(state)=>{
            state.loading=true,
            state.error=null
         },
         loginSuccess:(state,actions)=>{
            state.error=null
            state.isLoggedIn= true,
            state.loading=false,
            state.user=actions.payload
         },
         loginFail:(state,actions)=>{
            state.error=actions.payload,
            state.isLoggedIn=false,
            state.loading=false,
            state.user=null
         },
         logout:(state)=>{
        state.user =null,
        state.error=null,
        state.isLoggedIn=false,
        state.loading=false
         }


    })
});

export const {loadingStart,loginFail,loginSuccess,logout}=AuthSlice.actions

export default AuthSlice.reducer

