import React, { useEffect, useMemo, useState } from "react";
import chatLogo from "../assets/images/chatLogo.png";
import allProfile from "../hooks/useAllProfile";
import Swal from "sweetalert2";
import personalChatPerson from "../hooks/usePersonalChatPerson";
import loader from "../assets/images/loadingIcon.gif";
import { io } from "socket.io-client";

function Text() {
  const [showMessage, setShowMessage] = useState(false);
  const [finderPerson, setFinderPerson] = useState();
  // const {data,loading} = allProfile()
  const { data, personalChat, loading } = personalChatPerson();
  const socket = useMemo(() => io("http://localhost:4000/"), []);

  const userA = {
    id: 1,
    name: "User A",
  };
  const userB = {
    id: 2,
    name: "User B",
  };

  useEffect(() => {
    socket.on("connect", () => {
      console.log('socket',socket.id)
            socket.emit("joinRoom", { senderId: userA.id, receiverId: userB.id });

    });


      socket.emit('sendMessage',{senderId: userA.id, receiverId: userB.id,text:"Hy User A i am from user B"})

      socket.on('newMessage',(data)=>{
        console.log("this is message data",data)
      })




      return () => {
        socket.off("connect");
      };

  }, [socket, userA.id, userB.id]);






  const userProfile = localStorage.getItem("image");
  const showMessages = () => {
    setShowMessage(true);
  };

  const findPerson = async () => {
    const { value: email } = await Swal.fire({
      title: "Enter Email or Id ",
      input: "email",
      inputLabel: "Other Person email address",
      inputPlaceholder: "Enter Other Person email address",
    });
    if (email) {
      // Swal.fire(`${email}`);
      setFinderPerson(email);
      personalChat(email);
    }
  };

  if (loading) {
    return (
      <div className="h-[35%] flex justify-center ">
        <img src={loader} alt="Loading Icon" />
      </div>
    );
  }

  return (
    <div className=" h-[930px] text-white flex gap-5 bg-gray-900  ">
      <div className={` border-2 border-white w-[100%] md:w-[30%]  `}>
        <div className={` h-[120px] flex border-2 border-yellow-400 `}>
          <div className=" text-[#31C48D] w-[30%] font-extrabold  border-2 text-[15px]  sm:text-2xl md:text-3xl flex items-center  ">
            <p>Z-chat</p>
          </div>

          <div
            className={` border-2  flex justify-end items-center border-pink-400 w-[70%] `}
          >
            <div
              className={`border-2 border-green-500 w-[45px] smallSm:w-[50px] sm:w-[70px] md:w-[100px] h-[45px] smallSm:h-[50px] sm:h-[70px] md:h-[100px]  rounded-[100%]`}
            >
              <img
                src={userProfile}
                alt="User Profile"
                className=" rounded-[100%] h-full w-full "
              />
            </div>
          </div>
        </div>
        <hr />
        <br />
        <div
          className={`border-2 h-[40px] border-green-600 flex justify-between items-center `}
        >
          <div
            className={`cursor-pointer font-bold text-[10px] smallSm:text-[20px] `}
            onClick={findPerson}
          >
            P2P
          </div>
          <div
            className={`cursor-pointer font-bold text-[10px] smallSm:text-[20px] `}
          >
            Group
          </div>
        </div>

        <br />

        {data?.data ? (
          <div
            className={`border-2 h-[65px] flex items-center mt-2 cursor-pointer`}
            onClick={showMessages}
          >
            <div
              className={`  w-[30px] smallSm:w-[40px] sm:w-[53px] h-[30px] smallSm:h-[40px] sm:h-[53px] md:h-[64px] md:w-[62px] rounded-full border-2`}
            >
              <img
                src={data?.data.image}
                alt="user Profile"
                className=" h-full w-full rounded-full "
              />
            </div>
            <div className="  w-[calc(100%-70px)] ">
              <div className="  ml-1 h-[50%] flex justify-between items-end ">
                <div className=" text-[7px] smallSm:text-[9px] sm:text-[13px] md:text-[13px] font-extrabold ">
                  {data?.data.name}
                </div>
                <div className="text-[10px]">02:22pm</div>
              </div>
              <div className={`flex justify-between ml-1 h-[50%]`}>
                <div className=" flex items-end truncate   text-[12px] ">
                  <p className="truncate "> {data?.data.about}</p>
                </div>{" "}
                <div></div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      <div
        className={` hidden text-green-600  md:block  border-2 border-white md:w-[70%] `}
      >
        <div
          className={` border-2 border-pink-300 w-full h-[120px] flex  items-center `}
        >
          <div
            className={`border-2 h-[65px] w-full flex items-center cursor-pointer`}
          >
            <div
              className={`  w-[30px] smallSm:w-[40px] sm:w-[53px] h-[30px] smallSm:h-[40px] sm:h-[53px]  md:h-[64px] md:w-[62px] rounded-full border-2`}
            >
              <img
                src={chatLogo}
                alt="user Profile"
                className=" h-full w-full rounded-full "
              />
            </div>
            <div className="  w-[calc(100%-70px)] ">
              <div className="  ml-1 h-[50%] flex justify-between items-end ">
                <div className=" text-[7px] smallSm:text-[9px] sm:text-[13px] md:text-[13px] font-extrabold ">
                  Zaki Ur Rehman
                </div>
              </div>
              <div className={`flex justify-between ml-1 h-[50%]`}>
                <div className=" flex items-end text-[12px] truncate ">
                  <p className="truncate ">
                    hello brother hello brotherhello brother hello brother hello
                    brotherhello brother hello brother hello
                  </p>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>

        <div className=" border-2 border-yellow-600 h-[calc(100%-130px)] ">
          <div className={`h-[calc(100%-50px)]`}>
            <div className=" border-2  flex  ">
              <p className=" border-2 border-white w-[50%] ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                dignissimos iure consectetur, doloribus debitis ab dicta unde
                eligendi neque ipsum pariatur eaque obcaecati optio ex tempore
                commodi blanditiis praesentium id deserunt nisi rerum sequi
                ducimus modi nemo! Quasi eum repellat deleniti reiciendis
                magnam. Id, velit animi! Aut labore cumque earum quaerat
                deserunt cupiditate, nisi nostrum!
              </p>
            </div>
            <div className=" border-2 border-white  mt-3 flex justify-end ">
              <p className=" border-2 border-white w-[50%] ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                dignissimos iure consectetur, doloribus debitis ab dicta unde
                eligendi neque ipsum pariatur eaque obcaecati optio ex tempore
                commodi blanditiis praesentium id deserunt nisi rerum sequi
                ducimus modi nemo! Quasi eum repellat deleniti reiciendis
                magnam. Id, velit animi! Aut labore cumque earum quaerat
                deserunt cupiditate, nisi nostrum!
              </p>
            </div>
          </div>

          <div className={` h-[50px] border-2 flex `}>
            <div className={` w-[70%] sm:w-[90%]  `}>
              <input
                type="text"
                name="text"
                id="text"
                className=" border-2 h-full w-full text-white text-[20px] "
              />
            </div>

            <div className=" text-white border-2 w-[30%] sm:w-[10%] flex justify-between items-center ">
              <div>
                <i className="fa-solid fa-paper-plane text-[30px] hover:text-[33px]  cursor-pointer "></i>
              </div>
              <div>
                <i className="fa-solid fa-microphone text-[30px] hover:text-[33px] cursor-pointer "></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Text;
