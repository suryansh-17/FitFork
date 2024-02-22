import React from "react";
import { Signup as SignupComponent } from "../components";
import bgImg from "../assets/bgImg.jpg";
import bgImgVerical from "../assets/bgImgVertical.jpg";
function Signup() {
  return (
    <div className="relative">
      <img
        src={bgImg}
        alt=""
        className="portrait:hidden absolute flex opacity-70 -z-10 overflow-hidden"
      />
      <img
        src={bgImgVerical}
        alt=""
        className="landscape:hidden absolute flex opacity-70 -z-10 overflow-hidden"
      />
      <div className="py-10">
        <SignupComponent />
      </div>
    </div>
  );
}

export default Signup;
