import { NavLink } from "react-router";
import myImg from "../../../assets/banner/bannerImg.png";
import { PiFilesFill } from "react-icons/pi";
import { FaPaperPlane } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-7xl mx-auto select-none h-[81vh] text-gray-500">
      <div className="relative w-full">
        <div>
          <h3 className="text-4xl text-center font-medium lowercase">
            Hi, My name is Shahadad Hossain and i am a
          </h3>
          <h1 className="uppercase font-black text-[160px] absolute w-full text-gray-800 top-20">
            Web Developer
          </h1>
          <h5 className="absolute right-8 top-66 text-2xl">from Bangladesh.</h5>
        </div>
        <div className="flex justify-center">
          <img src={myImg} className="scale-150 z-0" alt="Personal Image" />
          <div className="absolute inset-0 blur-3xl w-full bg-white/30 -bottom-36 mt-96 z-10"></div>
        </div>
        <div className="flex flex-row justify-center">
          <div className="z-20 absolute bottom-0">
            <div className="flex gap-5 text-lg">
              <NavLink to={"/project"}>
                <button className="px-14 py-5 bg-gray-800 rounded-xl text-white z-50 cursor-pointer hover:underline border-2 border-gray-800">
                  <span className="flex items-center gap-2">
                    <PiFilesFill className="text-3xl animate-bounce" />
                    Explore Projects
                  </span>
                </button>
              </NavLink>
              <NavLink to={"/contact"}>
                <button className="px-14 py-5 bg-white rounded-xl text-gray-900 z-50 border-2 border-gray-900 cursor-pointer hover:underline">
                  <span className="flex items-center gap-2">
                    <FaPaperPlane className="text-2xl animate-bounce" />
                    Start a project together
                  </span>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
