import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [user] = useAuthState(firebase.auth());
  const [sideNav, setSideNav] = useState("full");

  const handleSideNav = () => {
    if (sideNav === "full") {
      setSideNav("0");
    } else {
      setSideNav("full");
    }
  };
  return (
    <>
      <div className="w-full h-20 flex items-center justify-between px-8">
        <div className="text-xl text-white">Are you working out....</div>
        <div className="hidden md:flex items-center justify-center">
          <img
            src={user.photoURL}
            alt="userImage"
            referrerPolicy="no-referrer"
            className="w-10 rounded-full"
          />
          <h1 className="text-white mx-4 font-semibold text-xl">
            {user?.displayName}
          </h1>
          <button
            onClick={async () => {
              await firebase.auth().signOut();
            }}
            className="border-2 border-white py-1 px-6 font-semibold rounded-md m-2 text-white hover:bg-white hover:text-black transition duration-300 ease-in-out"
          >
            LogOut
          </button>
        </div>

        <div
          className="border-2 p-2 rounded-lg md:hidden"
          onClick={handleSideNav}
        >
          <FaBars className="text-white text-xl" />
        </div>
      </div>

      <div
        className={`h-full fixed top-0 z-1 w-[300px] bg-white pt-20 -translate-x-${sideNav} transition duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col items-center justify-center">
          <img
            src={user.photoURL}
            alt="userImage"
            referrerPolicy="no-referrer"
            className="w-20 rounded-full"
          />
          <h1 className="font-bold text-xl">{user?.displayName}</h1>
          <h1 className="my-2">{user?.email}</h1>
          <button
            onClick={async () => {
              await firebase.auth().signOut();
            }}
            className="border-2 border-black py-1 px-6 font-semibold rounded-md m-2 transition duration-300 ease-in-out"
          >
            LogOut
          </button>
        </div>
      </div>
    </>
  );
}
