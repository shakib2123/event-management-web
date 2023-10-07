import { BsBoxArrowInRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ShopCard = ({ product }) => {
  const { product_id, product_name, image_url, price, description } =
    product || {};
  console.log(product);
  return (
    <div className="card glass hover:bg-gradient-to-l from-pink-600 text-gray-200">
      <figure className="h-60 w-full">
        <img className="h-full w-full" src={image_url} alt={product_name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{product_name}</h2>
        <h2 className="card-title text-xl">${price}</h2>
        <p className="text-lg">{description}</p>
        <div className="card-actions justify-end">
          <Link to={`/serviceDetail/${product_id}`}>
            <button className="btn btn-primary bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300">
              See Details
              <BsBoxArrowInRight className="text-lg"></BsBoxArrowInRight>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
