import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePageGrid from "./components/HomePageGrid";
import SearchResults from "./components/SearchResults";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePageGrid /> },
      { path: "/search/:slug", element: <SearchResults /> },
    ],
  },
]);

export default router;
