import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { ParallaxProvider } from "react-scroll-parallax";

import Compounded from "./pages/compounded";
import Clarie from "./pages/clarie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Compounded />,
  },
  {
    path: "/clarie",
    element: <Clarie />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ParallaxProvider>
      <RouterProvider router={router} />
    </ParallaxProvider>
  </React.StrictMode>
);
