import React from "react";
import footerLogo from "../assets/footer-logo.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="px-4 py-6 bg-black text-white">
      <div className="flex flex-col md:flex-row items-center justify-between mb-10">
        <div className="flex md:flex-col gap-10 flex-row">
          <img src={footerLogo} alt="Footer Logo" className="w-15" />
          <div className="w-full flex break-words justify-between">
            <Link className="mr-5 hover:text-blue-700 text-center">About</Link>
            <Link className="mr-5 hover:text-blue-700 text-center">Features</Link>
            <Link className="mr-5 hover:text-blue-700 text-center">Gallery</Link>
            <Link className="mr-5 hover:text-blue-700 text-center">Pricing</Link>
            <Link className="mr-5 hover:text-blue-700 text-center">Team</Link>
          </div>
        </div>
        <div>
          <p className="text-sm md:flex mb-5">
            Subscribe to stay tuned for new products and latest updates.{" "}
            <span>Let's do it!</span>
          </p>
          <form action="" className="flex">
            <input
              type="text"
              placeholder="Enter your email address"
              className="px-4 py-2 w-64 border-1 border-yellow-400 rounded-l-md focus:outline-none"
            />
            <button className="bg-yellow-400 px-6 py-2 text-white font-medium rounded-r-md hover:bg-yellow-500 transition-all duration-200">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <hr className="border-t-1 border-gray-300"/>
      <div className="md:flex justify-between py-2 gap-2">
        <div className="flex justify-between">
            <Link className="mr-5 hover:text-blue-700 text-center">Policy</Link>
            <Link className="mr-5 hover:text-blue-700 text-center">Terms Of Use</Link>
            <Link className="mr-5 hover:text-blue-700 text-center">Sales And Refund</Link>
            <Link className="mr-5 hover:text-blue-700 text-center">Legal</Link>
          </div>
        <div className="flex mt-10 md:mt-0">
        <FaInstagram className="mr-5 hover:text-blue-700"/>
        <FaGoogle className="mr-5 hover:text-blue-700"/>
        <FaFacebook className="mr-5 hover:text-blue-700"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
