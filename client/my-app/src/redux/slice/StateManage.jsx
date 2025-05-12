import {createSlice} from "@reduxjs/toolkit"

const initialStateHandle = {
    loading:false,
    userData:{},
    token:'',
}

const stateManage = createSlice({
    name:'state',
    initialState:initialStateHandle,
    reducers:{
        changeLoading:(state,action)=>{
            state.loading = action.payload
        },
        addToken:(state,action)=>{
            state.token = action.payload
        }

    }
})

export const {changeLoading,storeUserData,addToken} = stateManage.actions;

export const initialStateSelector = (item)=>item.stateHandler.loading
export const tokenSelector = (item)=>item.stateHandler.token
// export const userDataSelector = (item)=>item.stateHandler.userData




export default stateManage.reducer;