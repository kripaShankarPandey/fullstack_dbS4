const mongoose = require("mongoose");
require("dotenv").config();
const main = async () => {
  try {
    await mongoose.connect(process.env.URL);
    console.log("server is connected to Database sucessfully");
  } catch (err) {
    console.log("Can't connected to DB");
  }
};
main();
module.exports = main;
