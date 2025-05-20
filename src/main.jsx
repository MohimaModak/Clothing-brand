import React from "react"; // Explicitly import React
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./assets/Component/Home/Home";
import './index.css';
import Contact from "./assets/Component/Contact/Contact";
import Dress from "./assets/Component/Dress/Dress";
import About from "./assets/Component/About/About";
import MoreProduct from "./assets/Component/MoreProduct/MoreProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/About",
        element: <About></About>,
      },
      {
        path: "/Dress",
        element: <Dress></Dress>,
      },
      {
        path: "/MoreProduct",
        element: <MoreProduct></MoreProduct>,
      },
      {
        path: "/Contact",
        element: <Contact></Contact>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
