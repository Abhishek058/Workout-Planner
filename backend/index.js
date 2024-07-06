const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes.js");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());

app.use("/", routes);
app.use("/v1/startWorkout", routes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Database Connected");
    const PORT = process.env.PORT || 5555;

    app.listen(PORT, () => {
      console.log(`🚀 Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
    console.log("⛔ Error connecting to the Backend");
  });
