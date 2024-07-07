import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePageGrid from "./components/HomePageGrid";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <HomePageGrid /> }],
  },
]);

export default router;
