import Navbar from "../../Components/Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from "sweetalert";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const { createUser, profileUpdate, googleLogin, githubLogin } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\]).{8,}$/.test(
        password
      )
    ) {
      return toast.error(
        "Password should be at least 6 latter and special character."
      );
    }
    createUser(email, password)
      .then((result) => {
        profileUpdate(name, photo)
          .then((result) => console.log(result.user))
          .catch((err) => console.log(err));
        e.target.reset();
        swal("Success!!", "Sign up successfully!", "success");
        navigate("/");
      })
      .catch((error) => {
        swal("Error!!", error.message, "error");
      });
  };
  const socialLogin = (media) => {
    media()
      .then((res) => {
        navigate("/");
        swal("Success!!", "Sign up successfully!", "success");
      })
      .catch((err) => {
        swal("Error!!", err.message, "error");
      });
  };
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
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
                <button className="btn btn-primary">Register</button>
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
                Already have an please
                <Link to="/login" className="underline ml-2">
                  Login
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

export default Register;
