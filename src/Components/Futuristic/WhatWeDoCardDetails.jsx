import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import WhatWeDoDetail from "./WhatWeDoDetail";

const WhatWeDoCardDetails = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  const cardData = useLoaderData();
  useEffect(() => {
    const findDetail = cardData?.find((data) => data.service_id === id);
    if (findDetail) {
      setDetail(findDetail);
    }
  }, [id, cardData]);

  return (
    <div className="min-h-screen">
      <Navbar></Navbar>
      <div className="w-full flex justify-center items-center py-8 md:py-24 px-3">
        <WhatWeDoDetail detail={detail}></WhatWeDoDetail>
      </div>
    </div>
  );
};

export default WhatWeDoCardDetails;
