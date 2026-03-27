import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import Installation from "../pages/Installation/Installation";
import AppDetails from "../pages/AppDetails/AppDetails";
import axios from "axios";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "apps",
        element: <Apps />,
      },
      {
        path: "installation",
        element: <Installation />,
      },
      {
        path: "appDetails/:id",
        element: <AppDetails />,
        loader: async () => {
          const res = await axios.get("data.json");
          return res.data;
        },
      },
    ],
  },
]);
