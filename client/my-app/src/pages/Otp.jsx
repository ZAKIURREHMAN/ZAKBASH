import React, { useEffect, useRef, useState } from 'react'
import AppLogo from '../components/AppLogo'
import { InputField } from '../components/InputField'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {initialStateSelector} from "../redux/slice/StateManage"
import loader from "../assets/images/loadingIcon.gif";
import {addSignupUserDataSelector} from '../redux/slice/SignUpSlice'


function Otp() {

    const emptyString = ['','','','']
    const [input,setInput] = useState(emptyString)
    const refData = [useRef(),useRef(),useRef(),useRef()]
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const initialLoadingSelector = useSelector(initialStateSelector)
    const registeredUser = useSelector(addSignupUserDataSelector)

    useEffect(()=>{
        refData[0].current.focus()
    },[])


    let reg = /^[0-9]/


    const handleChange = (e,index)=>{
        const val = e.target.value;
        let result = reg.test(val)
        if(!result){
            return null;
        }
        setInput(()=>{
            const copyStr = [...input]
            copyStr[index] = val
            return copyStr
        })
        const lengthOfInput = input.length
        if(index<lengthOfInput-1){
            refData[index+1].current.focus()
        }
    }

    const handleKey = (e,index)=>{
        const keyCode = e.keyCode;

        if(keyCode ===8){
            setInput(()=>{
                const copyStr = [...input]
                copyStr[index] = ""
                return copyStr
            })
            if(index>0){
                refData[index-1].current.focus()

            }
        }
    }
    useEffect(()=>{
      if(registeredUser?.data?.verify === true){
        navigate('/user-profile')
      }
   
    },[registeredUser])



    const pastOtp = (e)=>{
        const paste = e.clipboardData.getData("text");
        const onlyFourChar = paste.substring(0,4).split('')
        setInput(onlyFourChar)
        if(onlyFourChar){
            refData[3].current.focus()
        }
    }

    const handleOtp = ()=>{
            const convertStr = input.join('')
             dispatch({type:'CALL_OTP_API',payload:convertStr})
    }

    if(initialLoadingSelector){
      return(
         <div className="h-[35%] flex justify-center ">
                  <img src={loader} alt="Loading Icon" />
                </div>
      )
    }

  return (
    <div>
        <div className="h-[900px] ">
      <div className=" h-[5%] "></div>
      <div className=" h-[50%]">
        <AppLogo />
      </div>
      <div className='flex justify-center' ><strong>A one-time password (OTP) has been gracefully sent to your email—please check your inbox to proceed securely.</strong></div>
      <div className="h-[45%] flex justify-center">
        <div className=" flex flex-col  items-center  ">
          <strong className=" text-4xl font-bold "></strong>
          <div  className=" w-full " >
            <div className=" mt-3  font-light  w-full flex gap-2  ">
          
          {
            input.map((item,index)=>(
                <div key={index} >
                <InputField type='text' ref={refData[index]} value={input[index]} onPaste={(e)=>pastOtp(e)} onKeyDown={(e)=>handleKey(e,index)} maxLength={1} onChange={(e)=>handleChange(e,index)} id={`input${index}`} className="border-2 mt-1.5 w-[70px] h-[70px] text-center font-extrabold rounded-2xl pl-2 focus:border-[#31C48D] focus:outline-0 bg-gray-200  "
                />
                </div>
            ))
          }
             
            </div>
            <div className=" w-[100%] mt-5 h-[50px] ">
              <input
                type="submit"
                value="Submit"
                className="bg-[#31C48D] text-white h-full w-full rounded-4xl cursor-pointer text-2xl font-bold "
                onClick={handleOtp}
              />
            </div>
          </div>
          <div className=' mt-3 ' >
            <p>
              Re send Code{" "}
              {/* <samp className=" font-bold text-[#31C48D] ">Sign up</samp>{" "} */}
            </p>
          </div>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Otp