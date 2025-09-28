import { NavLink } from "react-router";
import logo from "../../../assets/logo/mainLogo.png";
import { FaPaperPlane } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="text-gray-700 max-w-7xl mx-auto">
      <div className="flex items-center justify-evenly w-full -mt-12">
        <div className="lg:w-2/12">
          <img src={logo} alt="" />
        </div>
        <div className="lg:w-10/12 text-left">
          <ul className="flex items-center justify-end gap-16 text-xl font-medium ">
            <NavLink to={"/"}>
              <li className="hover:text-gray-800 cursor-pointer font-extrabold text-gray-500">
                Home
              </li>
            </NavLink>
            <NavLink to={"/project"}>
              <li className="hover:text-gray-800 cursor-pointer font-extrabold text-gray-500">
                Project
              </li>
            </NavLink>
            <NavLink to={"/about"}>
              <li className="hover:text-gray-800 text-gray-500 cursor-pointer font-extrabold">
                About
              </li>
            </NavLink>
            <NavLink to={"contact"}>
              <button className="bg-gray-800 text-white px-12 py-4 rounded-xl hover:text-white transition-all duration-700 cursor-pointer hover:px-14 inline-block hover:underline">
                <span className="flex items-center gap-2">
                  Message
                  <FaPaperPlane className="text-2xl animate-pulse" />
                </span>
              </button>
            </NavLink>
          </ul>
        </div>
      </div>
      <hr className="w-10/12 mx-auto -mt-12" />
    </nav>
  );
};

export default Navbar;
