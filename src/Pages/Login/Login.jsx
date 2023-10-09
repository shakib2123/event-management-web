import { IoIosMail } from "react-icons/io";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLockFill,
  BsTwitter,
} from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from "sweetalert";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../../Components/Navbar/Navbar";

const Login = () => {
  const { logIn, googleLogin, githubLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    logIn(email, password)
      .then((res) => {
        swal("Success!!", "Sign up successfully!", "success");
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => toast(err.message));
  };
  const socialLogin = (media) => {
    media()
      .then((res) => {
        navigate(location.state ? location.state : "/");
        swal("Success!!", "Sign up successfully!", "success");
      })
      .catch((err) => toast(err.message));
  };
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                <button
                  onClick={() => socialLogin(googleLogin)}
                  className="btn btn-secondary mt-2"
                >
                  Google
                </button>
                <button
                  onClick={() => socialLogin(githubLogin)}
                  className="btn btn-secondary mt-2"
                >
                  Github
                </button>
              </div>
              <p>
                Have no account please
                <Link to="/register" className="underline ml-2">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Login;
