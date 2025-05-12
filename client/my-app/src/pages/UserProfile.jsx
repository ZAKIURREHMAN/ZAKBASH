import React, { useState } from "react";
import avatar from "../assets/images/avatar.png";
import loaderIcons from "../assets/images/loadingIcon.gif"
import { InputField } from "../components/InputField";
import { ToastContainer } from "react-toastify";
import showMessage from "../components/toastify";
import { useDispatch, useSelector } from "react-redux";
import { initialStateSelector } from "../redux/slice/StateManage";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function UserProfile() {
  const [profile, setProfile] = useState({
    name: " ",
    about: " ",
  });
  const [image, setImage] = useState();
  const loader = useSelector(initialStateSelector);
  const navigate = useNavigate()

  const dispatch = useDispatch();
  const getUserProfile = (e) => {
    setImage(e.target.files[0]);
  };

  const getUserData = (e) => {
    const { name, value } = e.target;
    setProfile((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const next = async () => {
    let finalImage = image;
    if (!finalImage) {
      const response = await fetch(avatar);
      const blob = await response.blob();
      finalImage = new File([blob], "avatar.png", {
        type: blob.type,
      });
    }
    dispatch({
      type: "USER_PROFILE",
      payload: {
        profile,
        image: finalImage,
      },
    });
  };

  const getUserId = localStorage.getItem('id')
 const getImage = localStorage.getItem('image')
  useEffect(()=>{
    if(getUserId && getImage){
      navigate('/text')
    }
  },[getUserId,getImage])






  
  return (
    <div className=" h-[950px]  w-full flex justify-center items-center bg-gray-900 ">
      {
        loader?<><div className=" flex justify-center ">
        <img src={loaderIcons} alt="Loading Icon" />
      </div></>:<div className="  h-[600px] w-[70%]  md:w-[300px] border-[1px] border-gray-500  ">
        <div className=" h-[200px]  flex justify-center items-center ">
          <div className=" h-[150px] w-[150px] rounded-full ">
            <label htmlFor="user-image">
              {" "}
              <img
                src={image ? URL.createObjectURL(image) : avatar}
                alt="avatar"
                className=" rounded-full cursor-pointer"
              />
            </label>
            <input
              type="file"
              id="user-image"
              className="hidden"
              name="image"
              onChange={(e) => getUserProfile(e)}
            />
          </div>
        </div>
        <div className=" mt-1 text-gray-300  bg-gray-900 ">
          <label
            htmlFor="name"
            className=" font-extrabold text-2xl  bg-gray-900 "
          >
            Name
          </label>{" "}
          <br />
          <InputField
            type="text"
            name="name"
            id="name"
            placeholder="Enter Your Name"
            onChange={getUserData}
            className=" border-2 border-gray-200 mt-1 pl-1.5 bg-gray-900 border-t-0 border-l-0 border-r-0 outline-0 w-full "
          />
        </div>
        <div className=" mt-7 text-gray-300 ">
          <label htmlFor="about" className=" font-extrabold text-2xl ">
            About
          </label>{" "}
          <br />
          <InputField
            type="text"
            name="about"
            id="about"
            placeholder="About text here"
            onChange={getUserData}
            className=" border-2 border-gray-200 bg-gray-900 mt-1 pl-1.5 border-t-0 border-l-0 border-r-0 outline-0 w-full "
          />
        </div>
        <div className=" w-[100%] mt-20 h-[50px] ">
          <input
            type="submit"
            value="Next"
            onClick={next}
            className="bg-[#31C48D] hover:bg-[#add4c6] text-white h-full w-full rounded-4xl cursor-pointer text-2xl font-bold "
          />
        </div>
      </div>
      }
      <ToastContainer />
    </div>
  );
}

export default UserProfile;
