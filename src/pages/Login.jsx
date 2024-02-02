import React from "react";
import { Login as LoginComponent } from "../components";
import bgImg from "../assets/bgImg.jpg";
import bgImgVerical from "../assets/bgImgVertical.jpg";
function Login() {
  return (
    <div className="relative">
      <img
        src={bgImg}
        alt=""
        className="portrait:hidden absolute flex opacity-70 -z-10"
      />
      <img
        src={bgImgVerical}
        alt=""
        className="landscape:hidden absolute flex opacity-70 -z-10"
      />
      <div className="py-10">
        <LoginComponent />
      </div>
    </div>
  );
}

export default Login;
