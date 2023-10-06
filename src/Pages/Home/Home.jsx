import Banner from "../../Components/Banner/Banner";
import Navbar from "../../Components/Navbar/Navbar";
import "../Register/Register.css";
const Home = () => {
  return (
    <div
      style={{
        backgroundImage: "url(https://i.ibb.co/YPppvMK/Banner3.jpg)",
      }}
      className="h-screen hole-container bg-no-repeat bg-cover"
    >
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
};

export default Home;
