import { BsBoxArrowInRight } from "react-icons/bs";
import swal from "sweetalert";

const Expert = ({ expert, animation }) => {
  const {
    experience,
    image_url,
    developer_name,
    specialization,
    description,
    developer_id,
  } = expert;
  const handleHire = () => {
    const developerArrow = [];
    const localAddedDeveloper = JSON.parse(localStorage.getItem("developers"));
    if (!localAddedDeveloper) {
      developerArrow.push(expert);
      localStorage.setItem("developers", JSON.stringify(developerArrow));
      swal("Success", "Successfully added in cart!", "success");
    } else {
      const isExist = localAddedDeveloper.find(
        (item) => item.developer_id === developer_id
      );
      console.log(isExist);
      if (!isExist) {
        localAddedDeveloper.push(expert);
        localStorage.setItem("developers", JSON.stringify(localAddedDeveloper));
        swal("Success!", "Successfully hired!", "success");
      } else {
        swal("Duplicate!", "Already hired.", "error");
      }
    }
  };

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
        <h2 className="card-title text-pink-600">{experience}!</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleHire()}
            className="btn btn-primary bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300"
          >
            Hire Now
            <BsBoxArrowInRight className="text-lg"></BsBoxArrowInRight>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Expert;
