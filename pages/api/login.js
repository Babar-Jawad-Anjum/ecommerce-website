import connectDb from "../../middlewares/mongoose";
import User from "../../models/User";
var CryptoJS = require("crypto-js");
var jwt = require("jsonwebtoken");

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = async (req, res) => {
  if (req.method == "POST") {
    let user = await User.findOne({ email: req.body.email });

    const bytes = CryptoJS.AES.decrypt(user.password, "secret-key-123");
    let decryptedPass = bytes.toString(CryptoJS.enc.Utf8);

    if (user) {
      if (user.email == req.body.email && req.body.password == decryptedPass) {
        var token = jwt.sign(
          {
            email: user.email,
            name: user.name,
          },
          "random-jwt-secret-key",
          { expiresIn: "2d" }
        );
        return res.status(200).json({ success: true, token });
      } else {
        return res
          .status(200)
          .json({ success: false, error: "Wrong Credentials!" });
      }
    } else {
      return res.status(200).json({ success: false, error: "User not found" });
    }
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};

export default connectDb(handler);
