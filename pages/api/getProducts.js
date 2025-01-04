import connectDb from "../../middlewares/mongoose";
import Product from "../../models/Product";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = async (req, res) => {
  // Add CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow all origins (for development)
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  let products = await Product.find();
  res.status(200).json(products);
};

export default connectDb(handler);
