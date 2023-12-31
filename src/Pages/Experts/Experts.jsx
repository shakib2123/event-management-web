import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Expert from "./Expert";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const aosAnimations = [
  "fade-up",
  "fade-down",
];
const Experts = () => {
  const experts = useLoaderData();
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <div className="py-6 md:py-10 px-3">
        <h1 className="text-4xl font-medium text-center mb-10">
          Our Experts Always With You For Your Help!
        </h1>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {experts.map((expert, index) => (
              <Expert
                key={expert.developer_id}
                expert={expert}
                animation={aosAnimations[index % aosAnimations.length]}
              ></Expert>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experts;
