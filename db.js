const mongoose = require("mongoose");
const main = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/crudaap");
    console.log("server is connected to Database sucessfully");
  } catch (err) {
    console.log("Can't connected to DB");
  }
};
main();
module.exports = main;
