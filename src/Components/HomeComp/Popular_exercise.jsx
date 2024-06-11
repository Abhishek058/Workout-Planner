import React from "react";
import g1Img from "../../assets/Group9.png";
import g2Img from "../../assets/Group10.png";
import g3Img from "../../assets/Group11.png";
import g4Img from "../../assets/Group12.png";
import g5Img from "../../assets/Group13.png";
import g6Img from "../../assets/Group14.png";

export default function Popular_exercise() {
  const exercise = [
    {
      imgUrl: g1Img,
      title: "Treadmill",
    },
    {
      imgUrl: g2Img,
      title: "Stretching",
    },
    {
      imgUrl: g3Img,
      title: "Yoga",
    },
    {
      imgUrl: g4Img,
      title: "Running",
    },
    {
      imgUrl: g5Img,
      title: "Lifting",
    },
    {
      imgUrl: g6Img,
      title: "Push-Up",
    },
  ];

  return (
    <div className="bg-black p-8 flex flex-col items-center">
      <h1 className="text-4xl max-w-7xl ml-5 w-full text-white text-left font-semibold mb-16">Popular Exercise</h1>
      <div className="grid gap-12 max-w-7xl w-full 
                      grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {exercise.map((exercise, index) => (
          <div key={index} className="flex justify-center hover:opacity-75 transition duration-200 ease-in">
            <img
              src={exercise.imgUrl}
              alt={exercise.title}
              className="max-w-full h-auto cursor-pointer hover:scale-105 transition duration-200 ease-in"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
