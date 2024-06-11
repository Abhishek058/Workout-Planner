import React from "react";

const WorkoutTimeline = () => {
  const workouts = [
    {
      day: "Day 1",
      activity: "Full Body",
      description:
        "Start with a 30-minute run followed by a full-body workout including squats, push-ups, and burpees.",
    },
    {
      day: "Day 2",
      activity: "Cardio And Core",
      description:
        "Engage in a cardio session like running or cycling, followed by core exercises such as planks, crunches, and Russian twists.",
    },
    {
      day: "Day 3",
      activity: "Pull Workout",
      description:
        "Focus on upper body pull exercises including pull-ups, rows, and bicep curls.",
    },
    {
      day: "Day 4",
      activity: "Leg Workout",
      description:
        "Perform leg-focused exercises such as squats, lunges, and calf raises.",
    },
    {
      day: "Day 5",
      activity: "Push Workout",
      description:
        "Target the upper body with push exercises like push-ups, shoulder presses, and tricep dips.",
    },
  ];

  return (
    <div className="flex flex-col items-center bg-black p-8">
      <h1 className="text-3xl font-bold mb-8 text-white">Workout Plan</h1>
      <div className="w-full max-w-4xl">
        {workouts.map((workout, index) => (
          <div
            key={index}
            className={`timeline-item flex ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            } w-full`}
          >
            <div className="bg-white bg-opacity-25 shadow-lg rounded-lg p-4 w-80">
              <h2 className="text-2xl text-white font-bold">{workout.day}</h2>
              <h3 className="text-lg text-green-600 font-semibold mb-2">
                {workout.activity}
              </h3>
              <p className=" text-gray-400">{workout.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutTimeline;
