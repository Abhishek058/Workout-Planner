import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const [showModal, setShowModal] = useState("top-full");
  const [caloriCount, setCaloriCount] = useState(0);
  const [Stime, setSTime] = useState(0);
  const [Mtime, setMTime] = useState(0);

  const handleModal = () => {
    if (showModal === "top-full") setShowModal("top-0");
    else setShowModal("top-full");
  };

  useEffect(() => {
    if (caloriCount < 168) {
      const intervalId = setInterval(() => {
        setCaloriCount((prevCount) => prevCount + 1);
      }, 5);

      return () => clearInterval(intervalId);
    }
  }, [caloriCount]);

  useEffect(() => {
    if (Stime < 14) {
      const intervalId = setInterval(() => {
        setSTime((prevCount) => prevCount + 1);
      }, 45);

      return () => clearInterval(intervalId);
    }
  }, [Stime]);

  useEffect(() => {
    if (Mtime < 38) {
      const intervalId = setInterval(() => {
        setMTime((prevCount) => prevCount + 1);
      }, 35);

      return () => clearInterval(intervalId);
    }
  }, [Mtime]);

  return (
    <div>
      <div
        className={`w-full h-full fixed ${showModal} bg-black bg-opacity-90 z-1 flex flex-col items-center justify-center duration-200 ease-in-out transition-all`}
      >
        <div className="w-[300px] py-8 bg-white flex flex-col items-center justify-center rounded-xl">
          <h1 className="text-2xl text-center font-bold">
            Want to start your workout today?
          </h1>
          <img
            src="https://miro.medium.com/v2/resize:fit:888/1*fTBgwlcT6waWOfbvoFVFgw.gif"
            alt=""
          />
          <div className="">
            <Link
              to={"/workout"}
              className="bg-green-600 px-6 py-2 rounded-full text-white text-xl font-bold m-5"
            >
              YES
            </Link>
            <button
              onClick={() => {
                setShowModal("top-full");
              }}
              className="bg-red-600 px-6 py-2 rounded-full text-white text-xl font-bold m-5"
            >
              NO
            </button>
          </div>
        </div>
      </div>

      <div className="hero">
        <div className="h-full w-full bg-black bg-opacity-90 p-8 py-10 flex flex-col md:flex-row">
          <div className="text-white flex flex-col md:w-[70%]">
            <div className="flex gap-x-3 w-max items-center bg-white bg-opacity-20 rounded-full p-2">
              <div className="bg-green-400 px-3 py-1 text-xs sm:text-sm rounded-full font-medium">
                NEW
              </div>
              <div className="mr-2 text-gray-300 text-sm sm:text-md">
                High Intensity workout to burn calories
              </div>
            </div>
            <div className="text-[58px] sm:text-[90px] lg:text-[130px] xl:text-[170px] font-bold leading-none my-10">
              Calisthenics <br /> Workout
            </div>
            <div className="text-gray-500 text-sm md:text-md xl:text-lg">
              use your body weight for effective strength training. With little
              or no equipment, you can work out anywhere, building strength
              through natural, multi-joint movements.
            </div>
            <div className="my-10 flex items-center gap-x-4 md:gap-x-8">
              <button
                onClick={handleModal}
                className="w-1/2 md:w-1/4 py-4 text-md md:text-xl text-center font-semibold rounded-lg bg-green-400 bg-opacity-90"
              >
                Get Started
              </button>
              <button
                to={"https://www.youtube.com/watch?v=bU7Ue4xF3YI"}
                className="w-1/2 md:w-1/4 py-4 text-md md:text-xl text-center font-semibold rounded-lg bg-white bg-opacity-25"
              >
                Preview
              </button>
            </div>
          </div>
          <div className="flex md:flex-col md:w-[30%] items-center md:justify-center gap-y-10 gap-x-4">
            <div className="bg-white bg-opacity-25 w-1/2 pl-3 py-2 flex flex-col justify-center rounded-xl">
              <h1 className="text-yellow-400 text-4xl font-semibold">
                {Mtime}:{Stime}
              </h1>
              <h1 className="text-gray-400 text-xs font-semibold my-2">TIME</h1>
            </div>
            <div className="bg-white bg-opacity-25 w-1/2 pl-3 py-2 flex flex-col justify-center rounded-xl">
              <h1 className="text-red-600 text-4xl font-semibold">
                {caloriCount}+
              </h1>
              <h1 className="text-gray-400 text-xs font-semibold my-2">
                EST CALORIES
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
