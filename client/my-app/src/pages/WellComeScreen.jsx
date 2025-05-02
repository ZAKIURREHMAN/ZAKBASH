import React from 'react'
import AppLogo from '../components/AppLogo'


function WellComeScreen() {
  return (
    <div className='h-[900px]' >
             <div className=' h-[10%]'></div>
        <div className=' h-[55%] '>
            <AppLogo/>            
        </div>
        <div className='h-[35%] flex justify-center '>
           <div className=' flex flex-col  items-center justify-center ' >
           <strong className=' text-4xl font-bold ' >Well Come to ZAKBASH</strong>
            <p className=' mt-3 text-2xl font-light ' >
            Read our Privacy Policy. Tap <samp className=' text-blue-700  cursor-pointer ' >Agree and Continue</samp> to accept Term of Services
            </p>

            <div className=' w-[50%] mt-5 h-[50px] ' >
            <button className=' bg-[#31C48D] text-white h-full w-full rounded-4xl cursor-pointer text-2xl font-bold ' >
                Agree and Continue
            </button>
            </div>
           </div>


        </div>
    </div>
  )
}

export default WellComeScreen