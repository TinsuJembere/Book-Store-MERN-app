import React, { useState } from "react";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import avatarImg from "../assets/avatar.png";
import { FiHeart } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";
import { useSelector } from "react-redux";

function Navbar() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const currentUser = false;
  const navigation = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Orders", href: "/orders" },
    { name: "Cart", href: "/cart" },
    { name: "Check Out", href: "/checkout" },
  ];
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            <HiBars3CenterLeft className="size-6" />
          </Link>
          <div className="sm:w-72 w-40 flex items-center gap-4 bg-[#EAEAEA] py-1 md:px-4 px-2 rounded-md focus:outline-none">
            <IoIosSearch className="size-6" />
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search here"
              className="w-full border-0 bg-transparent focus:outline-none focus:ring-0"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div>
            {currentUser ? (
              <>
                <button onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
                  <img
                    src={avatarImg}
                    alt="user avatar"
                    className="size-6 rounded-full ring-2 ring-blue-200"
                  />
                </button>
                {isDropDownOpen && (
                  <div className="absolute right-0 mt-2 w-45 rounded-md bg-white shadow-lg z-40">
                    <ul className="py-2">
                      {navigation.map((item) => (
                        <li key={item.href}>
                          <Link
                            to={item.href}
                            onClick={() => setIsDropDownOpen(false)}
                            className="block px-6 py-2 text-sm hover:bg-gray-100"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to={'/login'}><AiOutlineUser /></Link>
            )}
          </div>
          <button className="hidden sm:block">
            <FiHeart className="size-6" />
          </button>
          <Link
            to="/cart"
            className="bg-primary rounded-sm p-1 sm:px-6 px-2 flex items-center gap-2"
          >
            <LuShoppingCart />
            <button>{cartQuantity}</button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
