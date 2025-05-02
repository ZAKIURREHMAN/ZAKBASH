import {configureStore} from "@reduxjs/toolkit"
import StateManage from "./slice/StateManage"

export const store = configureStore({
    reducer:{
        stateHandler:StateManage,
    }
})