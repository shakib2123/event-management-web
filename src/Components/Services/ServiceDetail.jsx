import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import ServiceDetailCard from "./ServiceDetailCard";
const ServiceDetail = () => {
  const [service, setService] = useState({});
  const { id } = useParams();
  const products = useLoaderData();

  useEffect(() => {
    const findService = products.find((item) => item.product_id === id);

    if (findService) {
      setService(findService);
    }
  }, [id, products]);

  return (
    <div className="min-h-screen">
      <Navbar></Navbar>
      <div className="w-full flex justify-center items-center py-8 md:py-24 px-3">
        <ServiceDetailCard service={service}></ServiceDetailCard>
      </div>
    </div>
  );
};

export default ServiceDetail;
