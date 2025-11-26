const mongoose = require("mongoose");

(async () => {
  await mongoose.connect("mongodb://localhost:27017/testdb");
  console.log("Connected!");

  const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
  });

  const User = mongoose.model("User", userSchema);

  const newUser = new User({ name: "Alice", age: 20 });
  await newUser.save(); // <-- This creates the DB & collection
  console.log("User saved");

  const users = await User.find();
  console.log("Users:", users);

  process.exit(); // Close program cleanly
})();
