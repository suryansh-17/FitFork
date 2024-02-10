import React from "react";
import bgImg from "../assets/bgImg.jpg";
import bgImgVerical from "../assets/bgImgVertical.jpg";
import Hero from "../components/Hero";
export default function Home() {
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
      <Hero />
    </div>
  );
}
