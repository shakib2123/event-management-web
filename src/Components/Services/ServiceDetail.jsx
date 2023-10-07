import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";

const ServiceDetail = () => {
  const [service, setService] = useState({});
  const { id } = useParams();
  const services = useLoaderData();

  useEffect(() => {
    const findService = services.find((item) => item.product_id === id);

    if (findService) {
      setService(findService);
    }
  }, [id, services]);

  console.log(service, id, service);
  return (
    <div>
      <Navbar></Navbar>
      <div className="w-full flex justify-center items-center py-8 md:py-24 px-3">
        <div className="card lg:card-side text-white hover:bg-gradient-to-r from-indigo-500 md:border-2  hover:border-blue-500 shadow-xl">
          <figure className="h-96 w-full lg:w-96">
            <img
              className="h-full w-full"
              src={service?.image_url}
              alt={service?.specialization}
            />
          </figure>
          <div className="card-body w-96">
            <h2 className="card-title">{service?.details?.Brand}</h2>
            <h2 className="card-title">{service?.details?.Model}</h2>
            <h2 className="card-title text-pink-600">${service?.price}</h2>
            <p>{service?.description}</p>
            <div className="card-actions">
              <Link>
                <button className="btn btn-primary bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300">
                  See More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
