import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Hero/Hero";
import App from "@/App";
import Detailedpage from "@/pages/detailedpage/Detailedpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details/:type/:id",
        element: <Detailedpage />,
      },
    ],
  },
]);

export default router;
