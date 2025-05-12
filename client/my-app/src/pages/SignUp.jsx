import React, { useEffect } from "react";
import * as yup from "yup";
import AppLogo from "../components/AppLogo";
import { InputField } from "../components/InputField";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { initialStateSelector } from "../redux/slice/StateManage";
import loader from "../assets/images/loadingIcon.gif";
import { addSignupUserDataSelector } from "../redux/slice/SignUpSlice";

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loadingState = useSelector(initialStateSelector);
  const registeredUser = useSelector(addSignupUserDataSelector);


  const schema = yup
    .object({
      name: yup.string().required("Enter Your Name"),
      email: yup
        .string()
        .required("Enter Your Email")
        .email("Your email is not valid"),
      password: yup
        .string()
        .required("Enter Your password")
        .min(5, "Your Password must be Five characters  "),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitData = (data) => {
    dispatch({ type: "USER_REGISTER", payload: data });
    
  };

  useEffect(()=>{
    const navigatePg = ()=>{
       if(registeredUser.name && registeredUser.email && registeredUser._id){
      navigate('/otp-code')
    }
    }
    navigatePg()
   
  },[registeredUser])



  return (
    <div>
      {loadingState ? (
        <div className="h-[35%] flex justify-center ">
          <img src={loader} alt="Loading Icon" />
        </div>
      ) : (
        <div className="h-[900px] ">
          <div className=" "></div>
          <div className=" h-[50%]">
            <AppLogo />
          </div>

          <div className="h-[50%] flex justify-center">
            <div className=" flex flex-col  items-center  ">
              <strong className=" text-4xl font-bold ">
                Sign in Your Account
              </strong>
              <form onSubmit={handleSubmit(submitData)} className=" w-full ">
                <div className=" mt-3  font-light  w-full ">
                  <div className="  h-[110px] ">
                    <strong className=" font-bold text-2xl ">Name</strong>{" "}
                    <br />
                    <InputField
                      type="text"
                      name="name"
                      {...register("name")}
                      id="name"
                      placeholder="Enter Your Name"
                      error={errors?.name?.message}
                      className="border-2 mt-1.5 w-full  h-[40px] rounded-4xl pl-2 focus:border-[#31C48D] focus:outline-0 bg-gray-200 "
                    />
                  </div>
                  <div className=" h-[110px]  ">
                    <strong className=" font-bold text-2xl ">E-mail</strong>{" "}
                    <br />
                    <InputField
                      type="text"
                      name="email"
                      {...register("email")}
                      id="email"
                      placeholder="Enter Your Email"
                      error={errors?.email?.message}
                      className="border-2 mt-1.5 w-full h-[40px]  rounded-4xl pl-2 focus:border-[#31C48D] focus:outline-0 bg-gray-200  "
                    />
                  </div>
                  <div className=" h-[110px]  ">
                    <strong className=" font-bold text-2xl ">Password</strong>{" "}
                    <br />
                    <InputField
                      type="text"
                      name="text"
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
                    className="bg-[#31C48D] hover:bg-[#add4c6] text-white h-full w-full rounded-4xl cursor-pointer text-2xl font-bold "
                  />
                </div>
              </form>
              <div>
                <p className=" mt-10 ">
                  Did You have an Account?{" "}
                  <samp
                    className=" font-bold text-[#31C48D] cursor-pointer  "
                    onClick={() => navigate("/sign-in")}
                  >
                    Sign in
                  </samp>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignUp;
