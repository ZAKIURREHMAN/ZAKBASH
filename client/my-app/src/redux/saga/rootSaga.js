
import {all} from "redux-saga/effects"
import signUpSaga from "./signUp"
import sendOtpSaga from "./sendOtp"
import profileSaga from "./profilePic"

function* rootSaga(){
    yield all([
        signUpSaga(),
        sendOtpSaga(),
        profileSaga()
    ])
}

export default rootSaga