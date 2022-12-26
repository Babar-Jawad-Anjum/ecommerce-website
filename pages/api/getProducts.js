import connectDb from "../../middlewares/mongoose";
import Product from "../../models/Product";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = async (req, res) => {
  let products = await Product.find();
  res.status(200).json(products);
};

export default connectDb(handler);
