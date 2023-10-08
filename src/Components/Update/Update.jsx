
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Update = () =>
{  useEffect(() => {
  AOS.init({
    duration: 1000,
  });
}, []);
  return (
    <div
      data-aos="fade-up"
      style={{
        backgroundImage: "url(https://i.ibb.co/N9hb1bN/update-bg.jpg)",
      }}
      className="bg-cover h-[60vh] bg-no-repeat mb-16 md:mb-32 flex justify-center items-center"
    >
      <div className="flex flex-col justify-center">
        <h1 className="text-2xl md:text-4xl font-bold text-center text-white drop-shadow-xl">
          Keep up-to-date with our latest release.
        </h1>
        <h1 className="text-2xl md:text-4xl font-bold text-center text-white">
          Join our mailing list.
        </h1>
        <div className="join bg-transparent mx-auto mt-6">
          <input
            className="input input-bordered join-item bg-transparent backdrop-blur-3xl rounded-l-full text-white md:w-96"
            placeholder="Email Address..."
          />
          <button className="btn join-item rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300 text-white">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Update;
