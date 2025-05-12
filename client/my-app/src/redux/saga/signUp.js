import { call, takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import { addSignUpUserData } from "../slice/SignUpSlice";
import { changeLoading } from "../slice/StateManage";
import showMessage from "../../components/toastify"


function* registerApi(data) {
  const { name, email, password } = data;

  try {
    yield put(changeLoading(true));
    const postData = yield call(
      axios.post,
      "http://localhost:4000/auth/signup",
      {
        name,
        email,
        password,
      }
    );
    yield put(changeLoading(false));
    showMessage('success',postData?.data?.message)
    const registeredUser = postData.data.newUser;
    yield put(addSignUpUserData(registeredUser));
    return postData;
  } catch (err) {
    yield put(changeLoading(false));
    showMessage('error',err?.response?.data?.message) || showMessage('error',"we are facing some errors please try again")
  }
}
function* workerSaga(action) {
  yield call(registerApi, action.payload);
}
function* mySata() {
  yield takeLatest("USER_REGISTER", workerSaga);
}
export default mySata;