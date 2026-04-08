import {createSlice} from "@reduxjs/toolkit"
 
const initialState={
        category:[],
    

}

const FiltersSlice =createSlice({
    name:"FiltersSlice",
    initialState,
    reducers:{

        categoryAdd: (state,action)=>{
          state.category=action.payload  
         
        }
        
    }
})

export const {categoryAdd} = FiltersSlice.actions
export default FiltersSlice.reducer