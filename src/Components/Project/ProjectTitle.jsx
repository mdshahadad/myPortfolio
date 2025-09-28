import { FaPaperPlane } from "react-icons/fa";
import { NavLink } from "react-router";

const ProjectTitle = () => {
  return (
    <div className="max-w-7xl mx-auto select-none">
      <h1 className="text-7xl font-black text-center uppercase leading-16 pt-28 text-gray-400">
        your site should <span className="text-gray-800">look good</span> &{" "}
        <br className="hidden 2xl:block" />{" "}
        <span className="text-gray-800">performance</span> optimized
      </h1>
      <div className="flex justify-center py-14">
        <NavLink to={"/contact"}>
          <button className="px-14 py-5 bg-white rounded-xl text-gray-900 z-50 border-2 border-gray-900 cursor-pointer hover:underline">
            <span className="flex items-center gap-2 text-lg">
              <FaPaperPlane className="text-2xl animate-bounce" />
              Start a project together
            </span>
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default ProjectTitle;
