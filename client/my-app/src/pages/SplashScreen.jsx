import React, { useEffect, useState } from 'react'
import AppLogo from '../components/AppLogo'
import Loading from '../assets/images/loadingIcon.gif'
import { useNavigate } from 'react-router-dom'

function SplashScreen() {
    const navigate = useNavigate()
    const [showLoader,setShowLoader] = useState(false)


    useEffect(()=>{

        const dispatchTimeOut = setTimeout(()=>{
            setShowLoader(true)
        },1500)

        const wellComeScreenTimeOut =   setTimeout(()=>{
            navigate('/well-come')
        },3000)

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
        {
         showLoader?<div className='h-[35%] flex justify-center '>
        <img src={Loading} alt="Loading Icon" />
        </div>:""
        }
    </div>
  )
}

export default SplashScreen