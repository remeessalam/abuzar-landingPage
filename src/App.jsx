import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./Layout/Applayout";
import LandingPage from "./pages/LandingPage/LandingPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/webpage",
        element: <LandingPage page={"web"} />,
      },
      {
        path: "/mobilepage",
        element: <LandingPage page={"mob"} />,
      },
      {
        index: true,
      },
    ],
  },
]);

export default appRouter;
