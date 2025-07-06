import { useEffect, useState } from "react";

function useAllProfile() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

    const allProfileUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:4000/get/user/profile");
        setLoading(false);
        if (!response.status === 200) {
          console.log("Response is not valid");
        }
        const result = await response.json();
        setData(result);
        return result;
      } catch (err) {
        setLoading(false);
        console.log("We are facing some errors ---->>>", err);
      }
    };

    useEffect(()=>{
      allProfileUsers()
    },[])


  return { loading, data,allProfileUsers };
}

export default useAllProfile;
