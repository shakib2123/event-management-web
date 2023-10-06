import "./Register.css";
import { IoIosMail } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLockFill,
  BsTwitter,
} from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div
      style={{ backgroundImage: 'url("https://i.ibb.co/yWFNYfw/bg.jpg")' }}
      className="h-screen hole-container bg-no-repeat bg-cover"
    >
      <section className="flex justify-center items-center w-full h-screen bg-cover bg-center ">
        <div className="h-screen md:h-fit p-3 w-full bg-transparent flex justify-center items-center backdrop-blur-[15px] md:rounded-3xl  md:w-2/3 lg:w-1/3 md:border">
          <form>
            <h2 className="text-3xl lg:text-4xl text-white text-center font-medium">
              Sign Up
            </h2>
            <div
              className="input-box relative w-72 my-6  border-b-2 flex"
              title="Type your name..."
            >
              <span>
                <FaUserEdit className="absolute right-2 text-white text-lg bottom-4"></FaUserEdit>
              </span>
              <input
                className="w-full h-9 bg-transparent border-none outline-none text-white pl-1 pr-8"
                type="text"
                name=""
                id=""
                required
              />
              <label className="absolute top-1/2 left-1 -translate-y-1/2 text-white transition duration-500">
                Name
              </label>
            </div>
            <div
              className="input-box relative w-72 my-6  border-b-2 flex"
              title="Type your email..."
            >
              <span>
                <IoIosMail className="absolute right-2 text-white text-lg bottom-4"></IoIosMail>
              </span>
              <input
                className="w-full h-9 bg-transparent border-none outline-none text-white pl-1 pr-8"
                type="email"
                name=""
                id=""
                required
              />
              <label className="absolute top-1/2 left-1 -translate-y-1/2 text-white transition duration-500">
                Email
              </label>
            </div>
            <div
              className="input-box relative w-72 my-6  border-b-2 flex"
              title="Type your password..."
            >
              <span>
                <BsLockFill className="absolute right-2 text-white text-lg bottom-4"></BsLockFill>
              </span>
              <input
                className="w-full h-9 bg-transparent border-none outline-none text-white pl-1 pr-8"
                type="password"
                name=""
                id=""
                required
              />
              <label className="absolute top-1/2 left-1 -translate-y-1/2 text-white transition duration-500">
                Password
              </label>
            </div>
            <div className="mb-3 text-white ">
              <label>
                <input
                  className="mr-1"
                  type="checkbox"
                  name=""
                  id=""
                  required
                />
                Agree terms and condition.
              </label>
            </div>
            <button
              className="w-full h-10 bg-white rounded-3xl cursor-pointer text-black font-semibold"
              type="submit"
            >
              Sign up
            </button>
            <div className="lg:mt-3">
              <div className="flex justify-center">
                <h2 className="px-1 font-semibold text-xl my-2 text-white">
                  Or
                </h2>
              </div>
              <div className="flex justify-around lg:mt-4">
                <p className="bg-white w-fit p-1 rounded-full text-2xl hover:cursor-pointer">
                  <FcGoogle></FcGoogle>
                </p>
                <p className="bg-white w-fit p-1 rounded-full text-2xl text-black hover:cursor-pointer">
                  <BsGithub></BsGithub>
                </p>
                <p className="bg-white w-fit p-1 rounded-full text-2xl text-blue-600 hover:cursor-pointer">
                  <BsFacebook></BsFacebook>
                </p>
                <p className="bg-white w-fit p-1 rounded-full text-2xl text-pink-600 hover:cursor-pointer">
                  <BsInstagram></BsInstagram>
                </p>
                <p className="bg-white w-fit p-1 rounded-full text-2xl text-blue-600 hover:cursor-pointer">
                  <BsTwitter></BsTwitter>
                </p>
              </div>
            </div>
            <div className="register-link my-3 lg:my-5 text-center text-white">
              <p className="text-white no-underline">
                Already have an account?
                <Link className="font-medium hover:underline mx-2" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Register;
