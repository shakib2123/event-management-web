import { useEffect, useState } from "react";

const Industries = () => {
  const [industries, setIndustries] = useState([]);
  useEffect(() => {
    fetch("/industries.json")
      .then((res) => res.json())
      .then((data) => setIndustries(data));
  }, []);
  return (
    <div className="max-w-7xl mx-auto my-6 md:my-16">
      <h1 className="text-3xl md:text-5xl font-semibold text-center">
        F<span className="font-bold text-purple-700">O</span>CUES ON INDUSTRIES
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-3 py-6 md:py-16">
        {industries.map((industry) => (
          <div
            key={industry.id}
            className="card glass hover:bg-gradient-to-l from-pink-600 text-gray-200"
          >
            <figure className="h-60 w-full">
              <img className="h-full w-full" src={industry?.image_url} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl">{industry?.category}</h2>
              <p className="text-lg">{industry?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industries;
