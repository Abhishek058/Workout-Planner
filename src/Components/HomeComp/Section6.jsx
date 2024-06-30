import React from "react";

export default function Section6() {
  return (
    <div className="bg-black w-full flex items-center justify-center h-1/2">
      <div className="bg-green-500 w-3/4 flex flex-col items-center justify-center py-8 p-2 rounded-xl my-6">
        <h1 className="text-white text-2xl md:text-3xl font-semibold text-center">Subscribe our fitness tips</h1>
        <p className="text-white text-sm md:text-md my-2 text-center">
          Clearly communicate the benefits of subscribing, such as exclusive
          content and breaking news.
        </p>
        <div className="w-3/4 bg-white rounded-md flex flex-col sm:flex-row items-center justify-between my-6">
          <input type="text" placeholder="Enter your email address" className="w-full rounded-md outline-none px-2 py-2"/>
          <button className="px-5 py-1 bg-black rounded-md text-md m-2 font-bold text-white">Subscribe</button>
        </div>
      </div>
    </div>
  );
}
