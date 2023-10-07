import { useEffect, useState } from "react";
import { BsBoxArrowInRight } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
const aosAnimations = [
  "fade-up",
  "fade-left",
  "fade-right",
  "fade-down",
  "zoom-in",
  "zoom-out",
];
const Futuristic = () => {
  const [futuristic, setFuturistic] = useState([]);
  useEffect(() => {
    fetch("/futuristic.json")
      .then((res) => res.json())
      .then((data) => setFuturistic(data));
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto my-8 md:my-16 px-3">
      <div>
        <h2
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="text-center font-medium text-3xl md:text-5xl"
        >
          Our futuristic services!
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4 md:my-8">
        {futuristic.map((service, index) => (
          <div
            data-aos={aosAnimations[index % aosAnimations.length]}
            data-aos-anchor-placement="top-bottom"
            className="border border-gray-300 rounded-xl"
            key={service.service_id}
            style={{
              backgroundImage: `url(${service.image_url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="relative h-full w-full rounded-xl bg-transparent bg-clip-border text-gray-100 shadow-md backdrop-blur-md flex flex-col">
              <div className="p-6 flex-grow">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {service.service_name}
                </h5>
                <p className="block font-sans text-base leading-relaxed text-inherit antialiased">
                  {service.description}
                </p>
              </div>
              <div className="p-6 pt-0">
                <Link className="font-medium text-blue-gray-900 transition-colors hover:text-pink-500">
                  <button
                    className="flex select-none items-center gap-2 rounded-lg py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-dark="true"
                  >
                    See More
                    <BsBoxArrowInRight className="text-lg"></BsBoxArrowInRight>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Futuristic;
