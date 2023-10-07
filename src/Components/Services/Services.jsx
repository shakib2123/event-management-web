import { useEffect, useState } from "react";
import { BsBoxArrowInRight } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
const aosAnimations = ["fade-up", "fade-down"];
const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="max-w-7xl mx-auto py-8 lg:my-16 px-3 border-b">
      <div
        data-aos="fade-down"
        className="max-w-3xl mx-auto text-center space-y-4"
      >
        <h1 className="text-2xl md:text-5xl font-medium text-center">
          Our services and sale!
        </h1>
        <p className=" text-lg">
          Discover a range of cutting-edge tech products designed to elevate
          your digital experience. From high-performance smartphones to sleek
          laptops, true wireless earbuds, stylish smartwatches, and more, we
          offer a diverse selection of gadgets to meet your modern lifestyle
          needs. Explore our collection and immerse yourself in innovation.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 gap-4">
        {services.map((service, index) => (
          <div
            data-aos={aosAnimations[index % aosAnimations.length]}
            data-aos-anchor-placement="top-bottom"
            key={service.product_id}
            className="card glass hover:bg-gradient-to-l from-pink-600 text-gray-200"
          >
            <figure className="h-60 w-full">
              <img
                className="h-full w-full"
                src={service.image_url}
                alt={service?.product_name}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl">{service.product_name}</h2>
              <h2 className="card-title text-xl">${service.price}</h2>
              <p className="text-lg">{service.description}</p>
              <div className="card-actions justify-end">
                <Link to={`/serviceDetail/${service.product_id}`}>
                  <button className="btn btn-primary bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300">
                    See Details
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

export default Services;
