import React from "react";
import Navbar from "../HomeComp/Navbar";
import Hero from "../HomeComp/Hero";
import Popular_exercise from "../HomeComp/Popular_exercise";

export default function Home() {
  return (
    <div className="bg-black h-screen">
      <Navbar />
      <Hero />
      <Popular_exercise />
    </div>
  );
}
