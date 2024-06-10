import React from "react";
import firebase from "firebase/compat/app";

export default function Home() {
  //logout function
  const logout = async () => {
    await firebase.auth().signOut();
  };
  return <div>
    <button onClick={logout}>
      LogOut
    </button>
  </div>;
}
