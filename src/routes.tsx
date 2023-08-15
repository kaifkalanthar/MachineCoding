import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Pagination from "./components/Pagination";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "pagination", element: <Pagination /> },
    ],
  },
]);

export default router;
