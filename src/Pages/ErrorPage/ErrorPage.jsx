
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      style={{ backgroundImage: "url(https://i.ibb.co/p20DRqn/004.jpg)" }}
      className="h-screen bg-no-repeat bg-cover bg-center relative flex justify-center"
    >
      <Link to="/" className="absolute bottom-4 md:bottom-1">
        <button className="btn btn-primary  ">Go Back Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
