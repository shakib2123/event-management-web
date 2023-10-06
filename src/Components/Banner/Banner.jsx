import { BsArrowRightCircleFill } from "react-icons/bs";
const Banner = () => {
  return (
    <div className="hero min-h-[80vh] text-white z-10">
      <div className="hero-content text-center">
        <div>
          <h1 className="mb-5 text-2xl md:text-6xl font-bold">
            Stratus is a better
            <br /> way to build websites
          </h1>
          <p className="mb-5 max-w-lg mx-auto">
            The premium WordPress theme designed to elevate your online 
            presence to unparalleled heights.
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
