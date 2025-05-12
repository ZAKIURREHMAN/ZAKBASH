import React from "react";
import chatLogo from "../assets/images/chatLogo.png"

function Text() {
//   const [showMessage, setShowMessage] = useState(null);

  return (
    <div className=" h-[950px] text-white flex bg-gray-900  ">
      <div className={` border-2 border-white w-[100%] md:w-[30%]   `}>
        <div className={` ml-10 mt-1.5`}>
          <div className=" text-[#31C48D] font-extrabold text-[10px]  md:text-2xl  ">ZAKBASH</div>
        </div>
        <hr />
        <br />



        <div className={`border-2 h-[65px] flex `}>
          <div className={`h-full w-[62px] rounded-full border-2`}>
            <img src={chatLogo} alt="user Profile" className=" h-full w-full rounded-full " />
          </div>
          <div className="  w-[calc(100%-70px)] ">
            <div className="  ml-1 h-[50%] flex justify-between items-end ">
                <div className=" text-[14px] font-extrabold ">
                Zaki Ur Rehman
                </div>
                <div className="text-[10px]" >
                    02:22pm
                </div>
            </div>
            <div className={`flex justify-between ml-1 h-[50%]`}>
              <div className=" flex items-end truncate   text-[12px] ">
               <p  className="truncate " > hello brother hello brotherhello brother hello brother hello
                brotherhello brother hello brother hello brotherhello brother
                hello brother hello brotherhello brother</p>
              </div>{" "}
              <div>
              </div>
            </div>
          </div>
        </div>



        
      </div>
      <div className={` hidden md:block  border-2 border-white md:w-[70%] `}>Right</div>
    </div>
  );
}

export default Text;
