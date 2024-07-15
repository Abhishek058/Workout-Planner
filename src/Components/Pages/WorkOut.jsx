import React, { useState, useEffect } from "react";
import axios from "axios";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import Navbar from "../HomeComp/Navbar";
import Login from "./Login";
import weeklyWorkoutRoutine from "../../workoutplan/workout";

export default function WorkOut() {
  const [user] = useAuthState(firebase.auth());
  const [loading, setLoading] = useState(true);
  const [workout, setWorkout] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    if (user) {
      getWorkout();
    }

    return () => clearTimeout(timer);
  }, [user]);

  const getWorkout = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5555/v1/getWorkout?email=${user?.email}`
      );
      setWorkout(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const today = new Date().getDay();
  const startDay = workout?.startDay;
  const todayWorkoutDay = (today - startDay) % 7;

  return (
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
        <div>
          {workout ? (
            <>
              <Navbar />
              <div>
                <h1 className="text-center my-4 text-3xl font-semibold text-gray-600">
                  Today's Workout
                </h1>
                <div>
                  <h1 className="text-center my-4 text-xl font-semibold text-gray-600">
                    {weeklyWorkoutRoutine[todayWorkoutDay].exercisesName}
                  </h1>
                  <div className="flex flex-col items-center justify-center">
                    {weeklyWorkoutRoutine[todayWorkoutDay].exercises.map(
                      (exercise, index) => (
                        <div
                          key={index}
                          className="w-4/5 bg-white rounded-lg shadow-lg p-4 my-2"
                        >
                          <h1 className="text-gray-600 text-xl font-semibold">
                            {exercise.name}
                          </h1>
                          <h1 className="text-gray-600 text-lg font-semibold">
                            Reps: {exercise.reps}
                          </h1>
                          <h1 className="text-gray-600 text-lg font-semibold">
                            Sets: {exercise.sets}
                          </h1>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="w-full h-screen flex items-center justify-center">
              <div className="w-[330px] h-[230px] flex flex-col items-center justify-center rounded-lg shadow-2xl p-6">
                <h1 className="text-gray-500 text-2xl font-semibold mb-2">
                  Can't find workout
                </h1>
                <h1 className="text-gray-700 text-center mb-5">
                  Create your own workout start today
                </h1>
                <Link
                  to={"/"}
                  className="w-2/3 bg-blue-400 rounded-lg py-2 font-bold text-white text-center hover:bg-blue-500 transition-colors"
                >
                  OK
                </Link>
              </div>
            </div>
          )}
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}
