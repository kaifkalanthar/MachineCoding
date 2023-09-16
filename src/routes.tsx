import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Pagination from "./components/Pagination";
import HomePage from "./pages/HomePage";
import ProgressBar from "./components/ProgressBar";
import QueryPagination from "./components/QueryPagination";
import Framer from "./components/Framer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "pagination", element: <Pagination /> },
      { path: "progress-bar", element: <ProgressBar /> },
      { path: "pagination-query", element: <QueryPagination /> },
      { path: "framer", element: <Framer /> },
    ],
  },
]);

export default router;
