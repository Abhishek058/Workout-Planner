import React from "react";
import workoutimage2 from "../../assets/WorkoutImage2.png";

export default function Section5() {
  return (
    <div className="bg-black p-10 flex items-center justify-center w-full">
      <div className="flex flex-col items-center justify-center md:flex-row md:space-x-10">
        <div className="flex justify-center md:w-3/5">
          <img
            src={workoutimage2}
            alt="Workout"
            className="m-10 w-full max-w-lg md:max-w-lg"
          />
        </div>
        <div className="text-white md:w-2/5">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            Transform your physique with our fitness plan.
          </h1>
          <div className="flex flex-col gap-y-3 mt-8">
            <div className="flex items-center md:justify-start">
              <div className="w-7 h-7 bg-green-600 mr-5 rounded-full text-center flex items-center justify-center">
                ✔
              </div>
              <p className="text-lg">Increase Muscle and Strength</p>
            </div>
            <div className="flex items-center md:justify-start">
              <div className="w-7 h-7 bg-green-600 mr-5 rounded-full text-center flex items-center justify-center">
                ✔
              </div>
              <p className="text-lg">Be Healthier than before</p>
            </div>
            <div className="flex items-center md:justify-start">
              <div className="w-7 h-7 bg-green-600 mr-5 rounded-full text-center flex items-center justify-center">
                ✔
              </div>
              <p className="text-lg">Increase Stamina</p>
            </div>
          </div>
          <div className="flex gap-x-4 mt-10">
            <button className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-md text-white text-lg font-bold duration-200">
              Join Now
            </button>
            <button className=" px-5 py-2 rounded-md text-white text-lg font-bold hover:bg-white hover:bg-opacity-35 duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
