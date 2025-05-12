import React from "react"





export const InputField = ({type,name,value,placeholder,error,id,className,...rest })=>{
    return(
        <>
    <input type={type} name={name} placeholder={placeholder} value={value} id={id} className={className} {...rest} />
    <p className=" text-red-500 " >{error} </p>
        </>

    )
}