import Banner from "../../Components/Banner/Banner";
import Builders from "../../Components/Builders/Builders";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Services from "../../Components/Services/Services";
import "../Register/Register.css";
const Home = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(https://i.ibb.co/PD8zq8M/epic-bg.jpg)",
        }}
        className="h-screen hole-container bg-no-repeat bg-cover"
      >
        <Navbar></Navbar>
        <Banner></Banner>
      </div>

      <div>
        <Services></Services>
        <Builders></Builders>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
