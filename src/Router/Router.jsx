import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Experts from "../Pages/Experts/Experts";
import ServiceDetail from "../Components/Services/ServiceDetail";
import Shop from "../Pages/Shop/Shop";
import WhatWeDoCardDetails from "../Components/Futuristic/WhatWeDoCardDetails";
import Developers from "../Pages/Developers/Developers";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/experts",
        loader: () => fetch("/experts.json"),
        element: <Experts></Experts>,
      },
      {
        path: "/serviceDetail/:id",
        loader: () => fetch("/services.json"),
        element: <ServiceDetail></ServiceDetail>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/whatWeDo/:id",
        loader: () => fetch("/whatWeDo.json"),
        element: <WhatWeDoCardDetails></WhatWeDoCardDetails>,
      },
      {
        path: "/developers",
        element: <Developers></Developers>,
      },
    ],
  },
]);

export default Router;
