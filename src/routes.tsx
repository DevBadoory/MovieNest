import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePageGrid from "./components/HomePageGrid";
import SearchResults from "./components/SearchResults";
import MovieDetailtPage from "./pages/MovieDetailtPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePageGrid /> },
      { path: "/search/:slug", element: <SearchResults /> },
      { path: "/movie/:id", element: <MovieDetailtPage /> },
    ],
  },
]);

export default router;
