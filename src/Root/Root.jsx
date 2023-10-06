import AOS from "aos/dist/aos.js";
import "aos/dist/aos.css";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
