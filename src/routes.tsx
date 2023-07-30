import { createBrowserRouter } from "react-router-dom";

import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import GameDetailsPage from "./pages/GameDetailPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
        { index: true, element: <HomePage />},
        { path: 'games/:id', element: <GameDetailsPage />}
    ]
  },
]);

export default router;
