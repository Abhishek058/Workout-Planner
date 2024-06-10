import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./Components/Pages/Login";
import Home from "./Components/Pages/Home";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import firebaseConfig from "./firebase/config";

firebase.initializeApp(firebaseConfig);

export default function App() {
  const [user] = useAuthState(firebase.auth());

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      firebase.auth().onAuthStateChanged((user) => {
        setLoading(false);
      });
    }, 2900);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              {loading ? (
                <div className="w-screen h-screen flex flex-col items-center justify-center bg-[#e0e0e0]">
                  <img
                    src="https://cdn.dribbble.com/users/1161944/screenshots/10945992/comp-12.gif"
                    alt="Loading..."
                    className="w-[400px]"
                  />
                </div>
              ) : user ? (
                <Home />
              ) : (
                <Login />
              )}
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
