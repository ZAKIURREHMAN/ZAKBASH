import React from "react";
import SplashScreen from "./pages/SplashScreen";
import WellComeScreen from "./pages/WellComeScreen";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Otp from "./pages/Otp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Text from "./pages/Text";
import UserProfile from "./pages/UserProfile";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/well-come" element={<WellComeScreen />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/otp-code" element={<Otp />} />
        <Route path="/text" element={<Text />} />
        <Route path="/user-profile" element={<UserProfile/>} />
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  );
}

export default App;
