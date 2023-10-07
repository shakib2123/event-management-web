import { BsBoxArrowInRight } from "react-icons/bs";

const Expert = ({ expert, animation}) => {
  const { experience, image_url, developer_name, specialization, description } =
    expert;
  return (
    <div
      data-aos={animation}
      data-aos-anchor-placement="top-bottom"
      className="card lg:card-side text-white hover:bg-gradient-to-r from-indigo-500 border-2  hover:border-blue-500 shadow-xl"
    >
      <figure className="h-full w-full lg:w-64">
        <img className="h-full w-full" src={image_url} alt={specialization} />
      </figure>
      <div className="card-body w-96">
        <h2 className="card-title">{developer_name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300">
            Read More{" "}
            <BsBoxArrowInRight className="text-lg"></BsBoxArrowInRight>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Expert;
