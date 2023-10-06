import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
const navLinks = (
  <>
    <li className="p-2 font-medium text-lg">
      <NavLink to="/">Home</NavLink>
    </li>

    <li className="p-2 font-medium text-lg">
      <NavLink to="/pages">Pages</NavLink>
    </li>
    <li className="p-2 font-medium text-lg">
      <NavLink to="/feature">Features</NavLink>
    </li>
    <li className="p-2 font-medium text-lg">
      <NavLink to="/blog">Blog</NavLink>
    </li>
    <li className="p-2 font-medium text-lg">
      <NavLink to="/shop">Shop</NavLink>
    </li>
  </>
);

const Navbar = () => {
  return (
    <div className="navbar bg-transparent lg:backdrop-blur-lg text-white max-w-7xl mx-auto py-5 static">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-transparent backdrop-blur-3xl rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className=" text-xl md:text-4xl cursor-pointer font-semibold">STRATUS</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1 space-x-8">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/login">
          <button className="hover:text-gray-400 w-24 h-10 font-semibold text-lg rounded-full text-white">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300 w-24 h-10 font-semibold text-lg rounded-full text-white">
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
