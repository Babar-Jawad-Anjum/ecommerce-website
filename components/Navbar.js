import Link from "next/link";
import React, { useRef, useState } from "react";
import {
  BsFillCartFill,
  BsFillBagCheckFill,
  BsTranslate,
} from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import {
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiTwotoneDelete,
} from "react-icons/ai";

const Navbar = ({
  logout,
  user,
  cart,
  addToCart,
  removeFromCart,
  clearCart,
  subTotal,
}) => {
  const ref = useRef();

  const [dropDown, setDropDown] = useState(false);

  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full"); 
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-start items-center p-3 shadow-lg bg-white sticky top-0 z-10">
      <div className="logo mr-auto md:mx-5">
        <Link legacyBehavior href={"/"}>
          <a>
            <img src="/logo.png" alt="" />
          </a>
        </Link>
      </div>
      <div className="nav">
        <ul className="flex space-x-4 font-bold md:text-l">
          <Link legacyBehavior href={"/hoodies"}>
            <a>
              <li className="hover:text-pink-500">Hoodies</li>
            </a>
          </Link>
          <Link legacyBehavior href={"/tshirts"}>
            <a>
              <li className="hover:text-pink-500">T-Shirts</li>
            </a>
          </Link>
          <Link legacyBehavior href={"/mugs"}>
            <a>
              <li className="hover:text-pink-500">Mugs</li>
            </a>
          </Link>
          <Link legacyBehavior href={"/stickers"}>
            <a>
              <li className="hover:text-pink-500">Stickers</li>
            </a>
          </Link>
        </ul>
      </div>
      <div className="flex cart absolute mx-3 right-0 cursor-pointer">
        <span>
          {dropDown && (
            <div
              onMouseOver={() => {
                setDropDown(true);
              }}
              onMouseLeave={() => {
                setDropDown(false);
              }}
              className="absolute right-9 w-32 bg-white shadow-lg border rounded-md px-5 top-6 py-4"
            >
              <ul>
                <Link legacyBehavior href={"/myaccount"}>
                  <a>
                    <li className="hover:text-pink-700 py-1 text-sm font-bold">
                      My Account
                    </li>
                  </a>
                </Link>
                <Link legacyBehavior href={"orders"}>
                  <a>
                    <li className="hover:text-pink-700 py-1 text-sm font-bold">
                      Orders
                    </li>
                  </a>
                </Link>

                <li
                  onClick={logout}
                  className="hover:text-pink-700 py-1 text-sm font-bold"
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
          {user.value && (
            <FaUserCircle
              onMouseOver={() => {
                setDropDown(true);
              }}
              onMouseLeave={() => {
                setDropDown(false);
              }}
              className="hover:text-pink-500 text-xl md:text-2xl mx-2"
            />
          )}
        </span>

        {!user.value && (
          <Link legacyBehavior href={"/login"}>
            <a>
              <button className="bg-pink-600 px-2 py-1 rounded-md text-sm text-white mx-2">
                Login
              </button>
            </a>
          </Link>
        )}
        <BsFillCartFill
          onClick={toggleCart}
          className="text-xl md:text-2xl hover:text-pink-500"
        />
      </div>

      {/* cart SideBar */}
      <div
        ref={ref}
        className={`w-72 h-[100vh] overflow-y-scroll sideCart absolute right-0 top-0 bg-pink-200 px-8 py-10  transform transition-transform ${
          Object.keys(cart).length !== 0 ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <h2 className="text-center font-bold text-xl">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-4 right-4 text-xl font-bold cursor-pointer"
        >
          <RxCross1 />
        </span>
        <ol className="list-decimal font-semibold">
          {Object.keys(cart).length === 0 && (
            <div className="my-4 font-normal">Your cart is empty!</div>
          )}
          {Object.keys(cart).map((element) => (
            <li key={element}>
              <div className="item flex my-5">
                <div className="w-2/3 font-semibold">{cart[element].name}</div>
                <div className="flex font-semibold items-center justify-center w-1/3">
                  <AiOutlineMinusCircle
                    onClick={() => {
                      removeFromCart(
                        element,
                        1,
                        cart[element].price,
                        cart[element].name,
                        cart[element].size,
                        cart[element].variant
                      );
                    }}
                    className="mx-2 text-4xl cursor-pointer text-pink-600"
                  />
                  {cart[element].qty}
                  <AiOutlinePlusCircle
                    onClick={() => {
                      addToCart(
                        element,
                        1,
                        cart[element].price,
                        cart[element].name,
                        cart[element].size,
                        cart[element].variant
                      );
                    }}
                    className="mx-2 text-4xl cursor-pointer text-pink-600"
                  />
                </div>
              </div>
            </li>
          ))}
        </ol>
        <div className="flex">
          <Link href={"/checkout"}>
            <button className="mr-1 text-sm flex mx-auto text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded">
              <BsFillBagCheckFill className="m-1" /> Checkout
            </button>
          </Link>
          <button
            onClick={clearCart}
            className="text-sm flex mx-auto text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded"
          >
            <AiTwotoneDelete className="text-lg" /> Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
