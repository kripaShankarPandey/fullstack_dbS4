const mongoose = require("mongoose");
const notesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
});
const NotesModel = mongoose.model("note", notesSchema);
module.exports = NotesModel;
