const express = require("express");
const app = express();
const main = require("./db");
const cors = require("cors");
app.use(cors());
const userRoute = require("./routes/user.routes");
const { notesRoute } = require("./routes/notes.routes");
app.use(express.json());
app.use("/user", userRoute);
app.use("/notes", notesRoute);
app.listen(8000, () => {
  console.log("Server is running on 8000");
});
