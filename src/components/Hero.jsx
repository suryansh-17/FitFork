import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
export default function Hero() {
  return (
    <div className="relative w-full z-30 font-Protest  text-red-600 text-center ">
      <div className="p-20">
        <span className="w-full block text-center text-7xl pt-20 ">
          Discover Nutrient-Packed Delights
        </span>
        <span className="w-full block text-center text-5xl pt-10">
          Our Fitness Recipe Hub
        </span>
        <span className="block pt-20 pb-20">
          <Link to="/signup">
            <Button
              type="submit"
              bgColor="bg-green-600"
              className="font-mono font-extrabold text-2xl"
            >
              Get Started 🚀
            </Button>
          </Link>
        </span>
      </div>
    </div>
  );
}
