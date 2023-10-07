import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Builders = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <figure
            className="max-w-xl"
            data-aos="fade-left"
            data-aos-anchor-placement="top-bottom"
          >
            <img
              src="https://i.ibb.co/hYk5tcF/Full-Stack-Developer-1.webp"
              className="w-full rounded-lg shadow-2xl"
            />
          </figure>
          <div data-aos="fade-right" data-aos-anchor-placement="top-bottom">
            <h1 className="text-5xl font-bold">
              Find your perfect creative match
            </h1>
            <p className="py-6">
              As the world largest and most far-reaching network of exceptional
              creative professionals, we are fully equipped to handle your most
              critical projects with ease.
            </p>
            <Link to="/experts">
              <button className="btn btn-primary">Find A Developer</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Builders;
