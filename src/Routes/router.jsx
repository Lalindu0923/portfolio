// Routes/router.jsx
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Projects from "../pages/projects"; 
import Designs from "../pages/designs"; 
import Layout from "../Components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/", // this is for "/"
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/designs",
        element: <Designs />,
      },
    ],
  },
]);



export default router;
