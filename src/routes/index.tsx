import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import About from "@/pages/About";
import Analytics from "@/pages/Admin/Analytics";

import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Bookings from "@/pages/User/Bookings";
import Verify from "@/pages/Verify";
import { createBrowserRouter } from "react-router";


export const router = createBrowserRouter([
    {
        Component : App,
        path: "/",
        children: [
            {
                path: "about",
                Component: About
            }
        ]
    },
    {
        Component : DashboardLayout,
        path: "/admin",
        children: [
            {
                path: "analytics",
                Component: Analytics
            }
        ]
    },
    {
        Component : DashboardLayout,
        path: "/user",
        children: [
            {
                path: "bookings",
                Component: Bookings
            }
        ]
    },
    {
       path: "/login",
       Component: Login
    },
    {
       path: "/register",
       Component: Register
    },
    {
       path: "/verify",
       Component: Verify
    },

])

