import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsExclamationTriangleFill } from "react-icons/bs";
import { NavLink } from "react-router";

const NotFound = () => {
  return (
    <div>
      <div className="flex justify-center max-w-7xl mx-auto">
        <h1 className="font-black text-gray-800 pt-40 leading-16">
          <span className="text-gray-500 text-9xl">Sorry!</span> <br />{" "}
          <span className="uppercase flex justify-center text-7xl items-center gap-8">
            You are in wrong route{" "}
            <BsExclamationTriangleFill className="text-red-400" />{" "}
          </span>
        </h1>
      </div>
      <div className="flex justify-center text-white font-medium text-xl hover:underline py-14">
        <NavLink to={"/"}>
          <button className="px-14 bg-gray-800 py-5 rounded-xl flex justify-center cursor-pointer">
            <span className="flex items-center justify-center gap-2">
              <AiFillHome className="text-3xl animate-bounce" />
              Back to Home
            </span>
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
