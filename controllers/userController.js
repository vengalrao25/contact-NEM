const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User Already registered");
  }
 
  // hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  console.log("User Created Successfully", user);
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User Data is not valid");
  }
  res.json({ message: "Register the user" });
});

// const registerUser = async (req, res) => {
//   try {
//     const { username, email, password } = req.body;
//     if (!username || !email || !password) {
//       res.status(400);
//       throw new Error("All fields are mandatory");
//     }
//     res.json({ message: "Register the user" });
//   } catch (err) {
//       res.status(500).json({ message: err.message });
//   }
// };

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("ALL FIELDS ARE MANDATORY!");
  }
  const user = await User.findOne({ email });
  if(user && (await bcrypt.compare(password , user.password))){
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      {expiresIn:"15m"}
    );
    res.status(200).json({accessToken})
  }else{
    res.status(401)
    throw new Error ("Email or Password is not valid")
  }

  res.json({ message: "Login the user" });
});

const currentUser = (req, res) => {
  res.json( req.user);
};
module.exports = { registerUser, loginUser, currentUser };
