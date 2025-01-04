import connectDb from "../../middlewares/mongoose";
import User from "../../models/User";
var CryptoJS = require("crypto-js");

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = async (req, res) => {
  // Add CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow all origins (for development)
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method == "POST") {
    let { name, email, password } = req.body;

    // Check if a user with the same name or email already exists
    let existingUser = await User.findOne({ $or: [{ name }, { email }] });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "User with the same name or email already exists" });
    }

    // Encrypt the password
    let hashedPassword = CryptoJS.AES.encrypt(
      password,
      "secret-key-123"
    ).toString();

    // Create a new user
    let u = new User({ name, email, password: hashedPassword });
    await u.save();

    res.status(200).json({ Success: "User has been registered successfully" });
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};

export default connectDb(handler);
