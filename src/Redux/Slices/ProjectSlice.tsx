import { AllProjectsListData } from "@/Data/Projects";
import { createSlice } from "@reduxjs/toolkit";

const projectSlice=createSlice({
    name:"projectStates",
    initialState:{
        items:AllProjectsListData
    },
    reducers:{
       addProjectList:(state,action)=>{
      state.items=[...state.items,action.payload]
       }
    }
})

export default projectSlice.reducer
export const {addProjectList} =projectSlice.actions