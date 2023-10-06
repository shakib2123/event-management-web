import { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="my-8 md:my-16">
      <div>
        <h2 className="text-center font-medium text-3xl md:text-5xl">
          Our services for client.
        </h2>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4 md:my-8">
        {services.map((service) => (
          <div
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
                <a
                  className="font-medium text-blue-gray-900 transition-colors hover:text-pink-500"
                  href=""
                >
                  <button
                    className="flex select-none items-center gap-2 rounded-lg py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-dark="true"
                  >
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      ></path>
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
