import React from "react";
import AppLogo from "../components/AppLogo";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputField } from "../components/InputField";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate()
  const Schema = yup
    .object({
      password: yup
        .string()
        .required("Enter Your Password"),
    })
    .required();

  const { register, handleSubmit, formState:{errors} } = useForm({
    resolver: yupResolver(Schema),
  });

  const submitData = (data) => {
    
    console.log("---->>>");
    console.log(data);
  };



  return (
    <div className="h-[900px] ">
      <div className=" h-[5%] "></div>
      <div className=" h-[50%]">
        <AppLogo />
      </div>

      <div className="h-[45%] flex justify-center">
        <div className=" flex flex-col  items-center  ">
          <strong className=" text-4xl font-bold ">Sign in Your Account</strong>
          <form onSubmit={handleSubmit(submitData)} className=" w-full " >
            <div className=" mt-3  font-light  w-full ">
          
              <div className=" h-[110px]  ">
                <strong className=" font-bold text-2xl ">Password</strong> <br />
                <InputField
                  type="text"
                  name="password"
                  {...register("password")}
                  id="password"
                  placeholder="Enter Your Password"
                  error={errors?.password?.message}
                  className="border-2 mt-1.5 w-full h-[40px]  rounded-4xl pl-2 focus:border-[#31C48D] focus:outline-0 bg-gray-200  "
                />
              </div>
            </div>
            <div className=" w-[100%] mt-5 h-[50px] ">
              <input
                type="submit"
                value="Submit"
                className="bg-[#31C48D] text-white h-full w-full rounded-4xl cursor-pointer text-2xl font-bold "
              />
            </div>
          </form>
          <div>
            <p>
              Did You have an Account?{" "}
              <samp className=" font-bold text-[#31C48D] cursor-pointer " onClick={()=>navigate('/sign-up')} >Sign up</samp>{" "}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SignIn;
