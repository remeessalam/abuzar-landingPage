import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./Layout/Applayout";
import LandingPage from "./pages/LandingPage/LandingPage";

const appRouter = createBrowserRouter([
  {
    path: "/webpage",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <LandingPage page={"web"} />,
      },
    ],
  },
  {
    path: "/mobilepage",
    element: <AppLayout />,
    children: [
      {
        index: true, // Makes this the default route for /mobilepage
        element: <LandingPage page={"mob"} />,
      },
    ],
  },
]);

export default appRouter;
