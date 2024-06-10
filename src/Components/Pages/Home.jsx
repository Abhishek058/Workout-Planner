import React from "react";
import Navbar from "../HomeComp/Navbar";
import Hero from "../HomeComp/Hero";

export default function Home() {
  return (
    <div className="bg-black h-screen">
      <Navbar />
      <Hero />
    </div>
  );
}
