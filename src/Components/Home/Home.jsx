import Navbar from "../Shared/Navigation/Navbar";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div className="h-screen relative bg-[#fff]">
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
};

export default Home;
