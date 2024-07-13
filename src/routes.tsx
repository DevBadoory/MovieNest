import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePageGrid from "./components/HomePageGrid";
import SearchResults from "./components/SearchResults";
import MovieDetailtPage from "./pages/MovieDetailtPage";
import TVShowDetailPage from "./pages/TVShowDetailPage";
import PersonDetailPage from "./pages/PersonDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePageGrid /> },
      { path: "/search/:slug", element: <SearchResults /> },
      { path: "/movie/:id", element: <MovieDetailtPage /> },
      { path: "/tv/:id", element: <TVShowDetailPage /> },
      { path: "/person/:id", element: <PersonDetailPage /> },
    ],
  },
]);

export default router;
