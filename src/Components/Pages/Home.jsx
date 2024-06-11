import React from "react";
import Navbar from "../HomeComp/Navbar";
import Hero from "../HomeComp/Hero";
import PopularExercise from "../HomeComp/PopularExercise";
import Workoutline from "../HomeComp/WorkoutLine";

export default function Home() {
  return (
    <div className="bg-black h-screen">
      <Navbar />
      <Hero />
      <PopularExercise />
      <Workoutline />
    </div>
  );
}
