import { takeLatest, call, select, put } from "redux-saga/effects";
import axios from "axios";
import {
  addSignupUserDataSelector,
  addSignUpUserData,
} from "../slice/SignUpSlice";
import { addToken, changeLoading } from "../slice/StateManage";
import showMessage from "../../components/toastify";

function* callOtp(otp) {
  const userData = yield select(addSignupUserDataSelector);
  const userId = userData._id;

  try {
    yield put(changeLoading(true));
    const response = yield call(
      axios.post,
      "http://localhost:4000/auth/verify/otp",
      {
        userId,
        otp,
      }
    );
    yield put(changeLoading(false));
       yield put(addToken(response?.data.token))

    yield put(addSignUpUserData(response.data));
    showMessage("success", response?.data.message);
  } catch (err) {
    yield put(changeLoading(false));
    if (err.status === 500) {
      showMessage(
        "info",
        "You are Reload before enter OTP, Now again try to signUp"
      );
    }
    showMessage("error", err.response.data.message);
  }

  const response = yield call(
    axios.post,
    "http://localhost:4000/auth/verify/otp",
    {
      userId,
      otp,
    }
  );
    yield put(addToken(response?.data.token))
}
function* handleOtpWorker(action) {
  yield call(callOtp, action.payload);
}

function* myOtpSaga() {
  yield takeLatest("CALL_OTP_API", handleOtpWorker);
}

export default myOtpSaga;
