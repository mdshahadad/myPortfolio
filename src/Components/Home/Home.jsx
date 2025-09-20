import banner from "../../assets/banner/homeBanner.JPG";
import Navbar from "../Shared/Navigation/Navbar";

const Home = () => {
  return (
    <div
      className="h-screen relative"
      style={{
        backgroundImage: `linear-gradient(#fff9, #c8c8ff99), url(${banner})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "fixed",
      }}
    >
      <div className="absolute"></div>
      <Navbar></Navbar>
    </div>
  );
};

export default Home;
