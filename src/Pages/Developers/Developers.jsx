import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import DeveloperCard from "./DeveloperCard";

const Developers = () => {
  const [developers, setDevelopers] = useState([]);
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    const localAddedDeveloper = JSON.parse(localStorage.getItem("developers"));
    setDevelopers(localAddedDeveloper);
  }, []);
  return (
    <div className="min-h-screen">
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto my-10">
        <h2 className="text-3xl md:text-5xl text-center mb-8 font-semibold ">
          Hired Developers.
        </h2>
        {developers ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {isShow
              ? developers?.map((developer) => (
                  <DeveloperCard
                    key={developer.developer_id}
                    developer={developer}
                  ></DeveloperCard>
                ))
              : developers
                  ?.slice(0, 4)
                  .map((developer) => (
                    <DeveloperCard
                      key={developer.developer_id}
                      developer={developer}
                    ></DeveloperCard>
                  ))}
          </div>
        ) : (
          <div className="my-16">
            <p className="text-lg text-center">
              There is no developers hired by you.
            </p>
          </div>
        )}
      </div>
      {developers && developers.length > 4 && (
        <div className="flex justify-center pb-8">
          <button
            onClick={() => setIsShow(!isShow)}
            className="btn btn-primary bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300"
          >
            {isShow ? "See Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Developers;
