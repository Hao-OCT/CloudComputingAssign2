const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});
// const user = mongoose.model("User", userSchema);
// user.create({
//   firstName: "John",
//   lastName: "Dae",
//   email: "John.dae@gmail.com",
//   password: "password"
// });
exports.User = mongoose.model("User", userSchema);
