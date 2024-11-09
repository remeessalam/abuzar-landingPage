import { createBrowserRouter, Navigate } from "react-router-dom";
import AppLayout from "./Layout/Applayout";
import LandingPage from "./pages/LandingPage/LandingPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/webpage" replace />, // Redirect to /webpage
      },
      {
        path: "webpage",
        element: <LandingPage page={"web"} />,
      },
      {
        path: "mobilepage",
        element: <LandingPage page={"mob"} />,
      },
    ],
  },
]);

export default appRouter;
