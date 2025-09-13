import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="text-white/65 pt-36 max-w-5xl mx-auto">
      <div className="flex items-center justify-between w-full">
        <div className="w-6/12">
          <h3 className="text-5xl font-black">shahadad</h3>
        </div>
        <div className="w-6/12">
          <ul className="flex items-center justify-end gap-8 text-2xl font-medium">
            <NavLink to={"project"}>
              <li className="hover:text-white cursor-pointer">Project</li>
            </NavLink>
            <NavLink to={"/about"}>
              <li className="hover:text-white cursor-pointer">About</li>
            </NavLink>
            <NavLink to={"contact"}>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </NavLink>
            <NavLink>
              <button className="bg-white/65 text-[#2450A9] px-10 py-2 rounded-lg font-extrabold cursor-pointer">
                Call Me
              </button>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
