import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BsBoxArrowInRight } from "react-icons/bs";

const DiscoveryBanner = () =>
{
      useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
  return (
    <div
      style={{ backgroundImage: "url(https://i.ibb.co/9wQXvTn/92923.jpg)" }}
      className="hero min-h-[85vh] text-white z-10"
    >
      <div className="hero-content text-center">
        <div data-aos="fade-up">
          <h1 className="mb-5 text-2xl md:text-6xl font-bold">
            Explore Our Services or <br /> Get Started Today!
          </h1>
          <p className="mb-5 max-w-xl mx-auto md:text-xl font-semibold">
            Experience TechWise Solutions - Your Premium Destination for Tech
            Excellence. Elevate your digital journey to unparalleled heights
            with our comprehensive range of tech services and solutions.
            Innovate, transform, and thrive with us!
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300">
            See Details
            <BsBoxArrowInRight className="text-lg"></BsBoxArrowInRight>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscoveryBanner;
