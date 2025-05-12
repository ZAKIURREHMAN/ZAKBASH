import { createSlice } from "@reduxjs/toolkit";


export const initialData = {
    items:[]
}


const signUp = createSlice({
    name:'signup',
    initialState:initialData,
    reducers:{
        addSignUpUserData:(state,action)=>{
            state.items = action.payload
        }
    }
})


export const {addSignUpUserData} = signUp.actions

export const addSignupUserDataSelector = (state)=>state.signUpSlice.items

export default signUp.reducer