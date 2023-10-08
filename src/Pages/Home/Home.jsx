import Banner from "../../Components/Banner/Banner";
import Builders from "../../Components/Builders/Builders";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import "../Register/Register.css";
import Services from "../../Components/Services/Services";
import Update from "../../Components/Update/Update";
import WhatWeDo from "../../Components/Futuristic/WhatWeDo";
const Home = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(https://i.ibb.co/PFSYw1S/tech-banner.jpg)",
        }}
        className="h-screen hole-container bg-no-repeat bg-cover"
      >
        <Navbar></Navbar>
        <Banner></Banner>
      </div>

      <div>
        <Services></Services>
        <WhatWeDo></WhatWeDo>
        <Builders></Builders>
        <Update></Update>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
