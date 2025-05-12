import {configureStore} from "@reduxjs/toolkit"
import StateManage from "./slice/StateManage"
import createSagaMiddleware from 'redux-saga'
import signUpSlice from './slice/SignUpSlice'
import rootSaga from "./saga/rootSaga"
const sagaMiddleware = createSagaMiddleware()


export const store = configureStore({
    reducer:{
        stateHandler:StateManage,
        signUpSlice:signUpSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)
