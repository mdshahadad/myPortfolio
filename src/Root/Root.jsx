import { Outlet } from "react-router";
import Navbar from "../Components/Shared/Navigation/Navbar";

const Root = () => {
  return (
    <div className="bg-gradient-to-r from-[#2450A9] via-[#587DCE] to-[#2450A9] h-screen">
      <div className="max-w-7xl mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
