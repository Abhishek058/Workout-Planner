const express = require("express");
const Workout = require("./models/model.js");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Server Running 👍🎉!");
});

router.post("/v1/startWorkout", async (req, res) => {
  try {
    const workoutExist = await Workout.findOne({ email: req.body.email });
    if (workoutExist) {
      return res.status(400).json({ message: "Workout already started" });
    }
    if (!req.body.email) {
      return res.status(400).json({ message: "Email is required" });
    }
    const workout = new Workout({
      email: req.body.email,
      startDate: new Date(),
      startDay: new Date().getDay(),
      streak: 0,
    });

    const savedWorkout = await workout.save();
    res.status(201).json(savedWorkout);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

router.get('/v1/getWorkout', async (req, res) => {
  try {
    const email = req.query.email;
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const workout = await Workout.findOne({ email: email });
    if (!workout) {
      return res.status(404).json({ message: 'Workout not found' });
    }

    res.json(workout);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

router.put("/v1/updateStreak", async (req, res) => {
  try {
    if (!req.body.email) {
      return res.status(400).json({ message: "Email is required" });
    }
    const workout = await Workout.findOne({ email: req.body.email });
    if (!workout) {
      return res.status(404).json({ message: "Workout not found" });
    }
    const today = new Date().now();
    if (today !== workout.startDay) {
      workout.streak = 0;
      workout.startDate = today;
    }
    workout.streak += 1;
    const updatedWorkout = await workout.save();
    res.json(updatedWorkout);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
