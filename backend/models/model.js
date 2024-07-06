const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  startDay: {
    type: Number,
    required: true,
  },
  streak: {
    type: Number,
    required: true,
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
