import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import NotFound from "../Components/Shared/NotFound/NotFound";
import Project from "../Components/Project/Project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/project",
        element: <Project></Project>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default router;
