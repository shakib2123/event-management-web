import { BsBoxArrowInRight } from "react-icons/bs";

const DeveloperCard = ({ developer }) => {
  const { experience, image_url, developer_name, specialization, description } =
    developer || {};
  return (
    <div className="card lg:card-side text-white hover:bg-gradient-to-r from-indigo-500 border-2  hover:border-blue-500 shadow-xl">
      <figure className="h-full w-full lg:w-64">
        <img className="h-full w-full" src={image_url} alt={specialization} />
      </figure>
      <div className="card-body w-96">
        <h2 className="card-title">{developer_name}</h2>
        <h2 className="card-title text-pink-600">{experience}!</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300">
            Hire Now
            <BsBoxArrowInRight className="text-lg"></BsBoxArrowInRight>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeveloperCard;
