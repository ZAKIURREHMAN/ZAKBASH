import {createSlice} from "@reduxjs/toolkit"

const initialStateHandle = {
    loading:false,
}

const stateManage = createSlice({
    name:'state',
    initialState:initialStateHandle,
    reducers:{
        changeLoading:(state,action)=>{
            state.loading = action.payload
        }
    }
})

export const {changeLoading} = stateManage.actions;

export const initialStateSelector = (item)=>item.stateHandler.loading




export default stateManage.reducer;