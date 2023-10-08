import AOS from "aos";
import "aos/dist/aos.css";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const navLinks = (
  <>
    <li className="p-2 font-medium text-lg">
      <NavLink to="/">Home</NavLink>
    </li>
    <li className="p-2 font-medium text-lg">
      <NavLink to="/discovery">Discovery</NavLink>
    </li>
    <li className="p-2 font-medium text-lg">
      <NavLink to="/developers">Developers</NavLink>
    </li>
    <li className="p-2 font-medium text-lg">
      <NavLink to="/shop">Shop</NavLink>
    </li>
  </>
);

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const handleLogOut = () => {
    logOut()
      .then((res) => console.log(res.user))
      .catch((err) => console.log(err));
  };
  return (
    <div className="w-full py-5 lg:backdrop-blur-lg lg:border-b">
      <div className="navbar bg-transparent  text-white max-w-7xl mx-auto ">
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
          <a className=" text-xl md:text-4xl cursor-pointer font-medium">
            <span className="text-purple-700">TECH</span> WISE
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 space-x-8">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <p className="text-lg">
                    User: {user.displayName ? user.displayName : "Unknown"}
                  </p>
                </li>
                <li>
                  <a onClick={handleLogOut}>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <div>
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
