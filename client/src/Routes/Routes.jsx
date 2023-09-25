import {
    createBrowserRouter,
  } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import Bookings from "../pages/Bookings/Bookings/Bookings";
import AddTour from "../pages/Dashboard/AddTour/AddTour";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import HomeDashboard from "../pages/Dashboard/HomeDashboard/HomeDashboard";
import ManageTour from "../pages/Dashboard/ManageTour/ManageTour";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import Reservations from "../pages/Dashboard/Reservations/Reservations";
import Flight from "../pages/Flight/Flight/Flight";
import Home from "../pages/Home/Home/Home";
import Hotel from "../pages/Hotel/Hotel/Hotel";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Tour from "../pages/Tour/Tour/Tour";
import PrivateRoute from "./PrivateRoute";

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
        },
        {
          path: 'bookings/:category',
          element: <Bookings></Bookings>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: "home",
          element: <HomeDashboard></HomeDashboard>
        },
        {
          path: "addtour",
          element: <AddTour></AddTour>
        },
        {
          path: "managetour",
          element: <ManageTour></ManageTour>
        },
        {
          path: "allusers",
          element: <AllUsers></AllUsers>
        },
        {
          path: "reservation",
          element: <Reservations></Reservations>
        },
        {
          path: "mycart",
          element: <MyCart></MyCart>
        },
        {
          path: "payment",
          element: <PaymentHistory></PaymentHistory>
        }
      ]
    }
  ]);