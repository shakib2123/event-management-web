import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";

import ShopCard from "./ShopCard";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const localItemAdded = JSON.parse(localStorage.getItem("products"));
    setProducts(localItemAdded);
  }, []);
  return (
    <div className="bg-[#000024]">
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-16 gap-4">
        {isShow
          ? products?.map((product) => (
              <ShopCard key={product.product_id} product={product}></ShopCard>
            ))
          : products
              ?.slice(0, 3)
              .map((product) => (
                <ShopCard key={product.product_id} product={product}></ShopCard>
              ))}
      </div>
      <div className="flex justify-center pb-9">
        <button
          onClick={() => setIsShow(!isShow)}
          className="btn btn-primary bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300"
        >
          {isShow ? "See Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default Shop;
