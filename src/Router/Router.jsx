import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Card from "../components/Card";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";
import Detail from "../pages/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "cards", element: <Detail /> },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
