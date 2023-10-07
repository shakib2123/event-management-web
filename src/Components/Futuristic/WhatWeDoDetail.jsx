const WhatWeDoDetail = ({ detail }) => {
  const { service_name, description, image_url } = detail || {};
  return (
    <div className="card lg:card-side text-white hover:bg-gradient-to-r from-indigo-500 md:border-2  hover:border-blue-500 shadow-xl">
      <figure className="h-96 w-full lg:w-96">
        <img className="h-full w-full" src={image_url} alt={service_name} />
      </figure>
      <div className="card-body w-96">
        <h2 className="card-title">{service_name}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <button className="btn btn-primary bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoDetail;
