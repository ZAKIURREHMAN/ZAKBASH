import { takeLatest,call,select, put } from "redux-saga/effects";
import axios from "axios";
import {addSignupUserDataSelector} from '../slice/SignUpSlice'
import {tokenSelector,changeLoading} from "../slice/StateManage"
import showMessage from "../../components/toastify";


function* callProfileApi (data){
   const user =  yield(select(addSignupUserDataSelector))
   const userId = user?.data?._id
   const token = yield select(tokenSelector)

    const {image} = data;
    const {name,about} = data.profile
    const formData = new FormData()
    formData.append('image',image)
    formData.append('name',name)
    formData.append('about',about)
    formData.append('userId',userId)


    try{
        yield put(changeLoading(true))
    const response = yield call(axios.put, "http://localhost:4000/auth/user/profile",formData,{

        headers:{
            'Content-Type':'multipart/form-data',
            'Authorization': `Bearer ${token}`
        }
    })
    if(response.status ===200){
        yield put(changeLoading(false))
        const { message, profile } = response.data;
        showMessage('success',message)
        const {userId,image} = profile;
        localStorage.setItem('id',userId)
        localStorage.setItem('image',image)   
        
    }
    }catch(err){
        yield put(changeLoading(false))
        showMessage('error',err?.response?.data?.message)
    }
}
function* profileWatcher(action){
    yield callProfileApi(action.payload)
}
function* profileSaga (){
    yield takeLatest("USER_PROFILE",profileWatcher)
}
export default profileSaga