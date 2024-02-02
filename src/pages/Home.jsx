import React from "react";
import Button from "../components/Button";
import bgImg from "../assets/bgImg.jpg";
import bgImgVerical from "../assets/bgImgVertical.jpg";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
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

        <div className="absolute w-full z-30 font-Protest  text-red-600  mt-20 text-center ">
          <span className="w-full block text-center text-7xl mt-10">
            Discover Nutrient-Packed Delights
          </span>
          <span className="w-full block text-center text-5xl mt-10">
            Our Fitness Recipe Hub
          </span>
          <span className="block mt-20">
            <Link to="/signup">
              <Button
                type="submit"
                bgColor="bg-green-600"
                className="font-mono font-extrabold text-xl"
              >
                Get Started
              </Button>
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}
