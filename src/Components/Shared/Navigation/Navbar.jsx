import { NavLink } from "react-router";
import logo from "../../../assets/logo/mainLogo.png";

const Navbar = () => {
  return (
    <nav className="text-gray-700 max-w-7xl mx-auto">
      <div className="flex items-center justify-evenly w-full -mt-10">
        <div className="lg:w-2/12">
          <img src={logo} alt="" />
        </div>
        <div className="lg:w-10/12 text-left">
          <ul className="flex items-center justify-end gap-12 text-xl font-bold">
            <NavLink to={"project"}>
              <li className="hover:text-[#577ccd] cursor-pointer">Project</li>
            </NavLink>
            <NavLink to={"/about"}>
              <li className="hover:text-[#577ccd] cursor-pointer">About</li>
            </NavLink>
            <NavLink to={"contact"}>
              <li className="hover:text-[#577ccd] cursor-pointer">Contact</li>
            </NavLink>
            <NavLink>
              <button className="bg-[#577ccd] text-white px-12 py-3 rounded-full font-bold hover:text-[#577ccd] hover:bg-white transition-all duration-500 border-2 cursor-pointer">
                Call Me
              </button>
            </NavLink>
          </ul>
        </div>
      </div>
      <hr className="w-10/12 mx-auto -mt-10" />
    </nav>
  );
};

export default Navbar;
