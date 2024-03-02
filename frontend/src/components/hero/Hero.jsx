import React from "react";
import heroImage from "../../assets/hero-image.jpg";

function Hero() {
  return (
    <>
      <div className="font-poppins bg-secondary lg:flex px-20 py-10 align-middle justify-between min-h-[90vh]">
        <div className="py-[8rem] flex-col align-middle justify-start">
          <h1 className="  text-4xl font-bold font-poppins mb-5">
            <span className=" ">Ambulance</span> Service
          </h1>
          <h3 className="font-poppins mb-5">Book an ambulance near you</h3>
          
          <input
            type="text"
            className=" px-4 mb-5 text-sm font-light  italic   outline-none h-10 w-80 bg-transparent rounded-lg"
            placeholder="Enter your location"
          />
          <br />
          <input
            type="text"
            className=" w-80 px-4 text-sm font-light  italic  outline-none h-10  bg-transparent rounded-lg"
            placeholder="Enter your destination"
          />
        </div>
        <div>
          <img src={heroImage} alt=""
          className=" lg:w-[35rem] rounded-xl" />
        </div>
      </div>
    </>
  );
}

export default Hero;
