import { RiShoppingCart2Fill } from "react-icons/ri";
import swal from "sweetalert";
const ServiceDetailCard = ({ service }) => {
  const { product_id, product_name, image_url, price, description , details} =
    service || {};
  const handleAddCart = () => {
    const itemArrow = [];
    const localItemAdded = JSON.parse(localStorage.getItem("products"));
    if (!localItemAdded) {
      itemArrow.push(service);
      localStorage.setItem("products", JSON.stringify(itemArrow));
      swal("Success", "Successfully added in cart!", "success");
    } else {
      const isExist = localItemAdded.find(
        (item) => item.product_id === product_id
      );
      if (!isExist) {
        localItemAdded.push(service);
        localStorage.setItem("products", JSON.stringify(localItemAdded));
        swal("Success!", "Successfully added in cart!", "success");
      } else {
        swal("Duplicate!", "Already added in cart.", "error");
      }
    }
  };
  return (
    <div className="card lg:card-side text-white hover:bg-gradient-to-r from-indigo-500 md:border-2  hover:border-blue-500 shadow-xl w-full  md:w-5/6">
      <figure className="h-96 w-full lg:w-96">
        <img className="h-full w-full" src={image_url} alt={product_name} />
      </figure>
      <div className="card-body w-96">
        <h2 className="card-title">{details?.Brand}</h2>
        <h2 className="card-title">{details?.Model}</h2>
        <h2 className="card-title">{product_name}</h2>
        <h2 className="card-title text-pink-600">${price}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <button
            onClick={() => handleAddCart()}
            className="btn btn-primary bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300"
          >
            Add To Cart <RiShoppingCart2Fill></RiShoppingCart2Fill>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailCard;
