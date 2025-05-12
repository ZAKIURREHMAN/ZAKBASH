import React, { useEffect } from 'react'
import AppLogo from '../components/AppLogo'
import Loading from '../assets/images/loadingIcon.gif'
import {initialStateSelector,changeLoading} from "../redux/slice/StateManage"
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function SplashScreen() {
    const state = useSelector(initialStateSelector)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect(()=>{

        const dispatchTimeOut = setTimeout(()=>{
            dispatch(changeLoading(true))
        },2000)

        const wellComeScreenTimeOut =   setTimeout(()=>{
            navigate('/well-come')
        },4000)


        return ()=>{
            clearTimeout(dispatchTimeOut)
            clearTimeout(wellComeScreenTimeOut)
        }

    })



  return (
    <div className=' h-[900px] ' >
        <div className=' h-[10%]'></div>
        <div className=' h-[55%]'>
            <AppLogo/>            
        </div>
        <div className='h-[35%] flex justify-center '>
            {state?<img src={Loading} alt="Loading Icon" />:""}
        </div>
    </div>
  )
}

export default SplashScreen