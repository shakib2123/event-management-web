import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="hero min-h-[80vh] text-white z-10">
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
          <button className="btn btn-primary rounded-full">
            Get Started <BsArrowRightCircleFill></BsArrowRightCircleFill>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
