import React from "react";
import Navbar from "../HomeComp/Navbar";
import Hero from "../HomeComp/Hero";
import PopularExercise from "../HomeComp/PopularExercise";
import Workoutline from "../HomeComp/WorkoutLine";
import Section5 from "../HomeComp/Section5";
import Section6 from "../HomeComp/Section6";
import Footer from "../HomeComp/Footer";

export default function Home() {
  return (
    <div className="bg-black h-screen">
      <Navbar />
      <Hero />
      <PopularExercise />
      <Workoutline />
      <Section5 />
      <Section6 />
      <Footer/>
    </div>
  );
}
