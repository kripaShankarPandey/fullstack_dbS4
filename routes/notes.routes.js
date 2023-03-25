const NotesModel = require("../model/note.model");
const express = require("express");
const notesRoute = express.Router();
const jwt = require("jsonwebtoken");
const { authMiddleware } = require("../middleware/auth.middleware");
//get Route
notesRoute.get("/", authMiddleware, async (req, res) => {
  try {
    let data = await NotesModel.find({ user_id: req.body.user_id });
    res.send(data);
  } catch (err) {
    res.send({ msg: "Not find any data" });
  }
});
//post Route
notesRoute.post("/add", authMiddleware, async (req, res) => {
  console.log(req.body);
  try {
    const data = new NotesModel(req.body);
    await data.save();
    res.send({ msg: "Data added to Db sucessfully" });
    console.log(data, "data");
  } catch (err) {
    res.send({ msg: "Data can't added to Db sucessfully" });
  }
});
//delte Route

notesRoute.delete("/delete/:id", authMiddleware, async (req, res) => {
  //   console.log(req.params);
  try {
    await NotesModel.findByIdAndDelete(req.params.id);

    res.send({ msg: "Data deleted to Db sucessfully" });
  } catch (err) {
    res.send({ msg: "You can't delete data" });
  }
});
module.exports = { notesRoute };
