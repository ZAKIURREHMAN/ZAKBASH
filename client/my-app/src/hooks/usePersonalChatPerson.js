// import { useState } from "react";

// function PersonalChatPerson() {

//   const [loading, setLoading] = useState(false);
//   const [data, setData] = useState();

//    const personalChat = async (email) => {
//       try {
//         setLoading(true);
//         const response = await fetch("http://localhost:4000/get/user/find/one",{
//             method:'POST',
//     headers:{
//         'Content-Type':'application/json'
//     },
//     body:JSON.stringify({email:email})
// });
//         setLoading(false);
//         if (!response.status === 200) {
//           console.log("Response is not valid");
//         }
//         const result = await response.json();
//         setData(result);
//         return result;
//       } catch (err) {
//         setLoading(false);
//         console.log("We are facing some errors ---->>>", err);
//       }
//     };

//   return{personalChat,loading,data}
// }

// export default PersonalChatPerson

import { useState } from "react";
import showMessage from "../components/toastify";

function PersonalChatPerson() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  const personalChat = (email) => {
    setLoading(true);
    const token = localStorage.getItem("token");

    fetch("http://localhost:4000/get/user/find/one", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ email: email }),
    })
      .then((res) => res.json())
      .then((data) => {
        const id = data.id;
        return fetch(
          `http://localhost:4000/get/user/single/user/profile/${id}`
        );
      })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.forwarded) {
                  setLoading(false);

          showMessage("success", data.message);
        } else {
          showMessage("error", data.message);
        }

        setData(data);
      })
      .catch((err) => console.log("errerr", err));
  };

  return { personalChat, loading, data };
}

export default PersonalChatPerson;
