import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePageGrid from "./components/HomePageGrid";
import SearchResults from "./components/SearchResults";
import MovieDetailtPage from "./pages/MovieDetailtPage";
import TVShowDetailPage from "./pages/TVShowDetailPage";
import PersonDetailPage from "./pages/PersonDetailPage";
import ErrorPage from "./pages/ErrorPage";
import MovieCreditsPage from "./pages/MovieCreditsPage";
import TvShowsCredits from "./pages/TvShowsCreditsPage";
import Login from "./pages/Login";
import WatchList from "./pages/WatchList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePageGrid /> },
      { path: "/search/:slug", element: <SearchResults /> },
      { path: "/movie/:id", element: <MovieDetailtPage /> },
      { path: "/tv/:id", element: <TVShowDetailPage /> },
      { path: "/person/:id", element: <PersonDetailPage /> },
      { path: "/movie/:id/credits", element: <MovieCreditsPage /> },
      { path: "/tv/:id/credits", element: <TvShowsCredits /> },
      { path: "/login", element: <Login /> },
      { path: "/watchlist", element: <WatchList /> },
    ],
  },
]);

export default router;
