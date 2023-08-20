import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Flight from "../pages/Flight/Flight/Flight";
import Home from "../pages/Home/Home/Home";
import Hotel from "../pages/Hotel/Hotel/Hotel";
import Tour from "../pages/Tour/Tour/Tour";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'tour',
          element: <Tour></Tour>
        },
        {
          path: 'hotel',
          element: <Hotel></Hotel>
        },
        {
          path: 'flight',
          element: <Flight></Flight>
        }
      ]
    },
  ]);