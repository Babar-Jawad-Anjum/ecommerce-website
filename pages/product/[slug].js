import { useRouter } from "next/router";
import React, { useState } from "react";
import Product from "../../models/Product";
import mongoose from "mongoose";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Post = ({ buyNow, addToCart, product }) => {
  const router = useRouter();
  const { slug } = router.query;
  const [pin, setPin] = useState(); //set pincode getting from user input
  const [service, setService] = useState();

  const [color, setColor] = useState(""); //Color of product i.e Red, Green, Blue
  console.log(color);

  const setColorOfProduct = (col) => {
    setColor(col);
  };

  const checkServiceability = async () => {
    let pins = await fetch(
      `https://aesthetic-brioche-06e2b8.netlify.app/api/pincode`
    );
    let pin_JSON = await pins.json();
    if (pin_JSON.includes(parseInt(pin))) {
      setService(true);
      toast.success("Your pincode is serviceable!", {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      setService(false);
      toast.error("Sorry! Pincode is not serviceable", {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const onChangePin = (e) => {
    setPin(e.target.value);
  };

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <ToastContainer />
        <div className="container px-5 py-10 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto px-24 object-cover object-top rounded"
              src={product[0].img}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {product[0].brand}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product[0].title}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-pink-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-pink-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-pink-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-pink-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-pink-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">
                    {product[0].reviews} Reviews
                  </span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">{product[0].desc}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  {product[0].color.includes("red") && (
                    <button
                      onClick={() => setColorOfProduct("red")}
                      className={`border-2 ${
                        color === "red" && "border-black"
                      }  ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none`}
                    ></button>
                  )}
                  {product[0].color.includes("green") && (
                    <button
                      onClick={() => setColorOfProduct("green")}
                      className={`border-2 ${
                        color === "green" && "border-black"
                      }  ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none`}
                    ></button>
                  )}
                  {product[0].color.includes("blue") && (
                    <button
                      onClick={() => setColorOfProduct("blue")}
                      className={`border-2 ${
                        color === "blue" && "border-black"
                      }  ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none`}
                    ></button>
                  )}
                  {product[0].color.includes("black") && (
                    <button
                      onClick={() => setColorOfProduct("black")}
                      className={`border-2 ${
                        color === "black" && "border-red-500"
                      }  ml-1 bg-black rounded-full w-6 h-6 focus:outline-none`}
                    ></button>
                  )}
                  {product[0].color.includes("yellow") && (
                    <button
                      onClick={() => setColorOfProduct("yellow")}
                      className={`border-2 ${
                        color === "yellow" && "border-black"
                      }  ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none`}
                    ></button>
                  )}
                  {product[0].color.includes("purple") && (
                    <button
                      onClick={() => setColorOfProduct("purple")}
                      className={`border-2 ${
                        color === "purple" && "border-black"
                      }  ml-1 bg-purple-500 rounded-full w-6 h-6 focus:outline-none`}
                    ></button>
                  )}
                  {product[0].color.includes("orange") && (
                    <button
                      onClick={() => setColorOfProduct("orange")}
                      className={`border-2 ${
                        color === "orange" && "border-black"
                      }  ml-1 bg-orange-500 rounded-full w-6 h-6 focus:outline-none`}
                    ></button>
                  )}
                  {product[0].color.includes("white") && (
                    <button
                      onClick={() => setColorOfProduct("white")}
                      className={`border-2 ${
                        color === "white" && "border-black"
                      }  ml-1 bg-white rounded-full w-6 h-6 focus:outline-none`}
                    ></button>
                  )}
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base pl-3 pr-10">
                      {product[0].size.includes("S") && <option>S</option>}
                      {product[0].size.includes("M") && <option>M</option>}
                      {product[0].size.includes("L") && <option>L</option>}
                      {product[0].size.includes("XL") && <option>XL</option>}
                      {product[0].size.includes("XXL") && <option>XXL</option>}
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${product[0].price}
                </span>
                <button
                  onClick={() => {
                    buyNow(slug, 1, 499, product[0].title, "XL", "red");
                  }}
                  className="flex ml-8 text-white bg-pink-500 border-0 py-2 px-1 md:px-6 focus:outline-none hover:bg-pink-600 rounded"
                >
                  Buy Now
                </button>
                <button
                  onClick={() => {
                    addToCart(slug, 1, 499, product[0].title, "XL", "red");
                  }}
                  className="flex ml-2 text-white bg-pink-500 border-0 py-2 px-1 md:px-6 focus:outline-none hover:bg-pink-600 rounded"
                >
                  Add to cart
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
              <div className="pincode mt-6 flex space-x-2 text-sm">
                <input
                  className="px-2 border-2 rounded-md border-gray-300"
                  type="text"
                  placeholder="Enter your pincode"
                  onChange={onChangePin}
                />
                <button
                  onClick={checkServiceability}
                  className="text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded"
                >
                  Check
                </button>
              </div>
              {!service && service != null && (
                <div className="text-red-700 text-sm mt-3">
                  Sorry! We do not deliver to this pincode yet
                </div>
              )}
              {service && service != null && (
                <div className="text-green-700 text-sm mt-3">
                  Yay! This pincode is serviceable
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    const url = process.env.MONGO_URI;
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
  let product = await Product.find({ slug: context.query.slug });
  return {
    props: { product: JSON.parse(JSON.stringify(product)) },
  };
}

export default Post;
