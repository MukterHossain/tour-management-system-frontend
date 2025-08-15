import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import About from "@/pages/About";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Verify from "@/pages/Verify";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminSideBarItems";
import { userSidebarItems } from "./userSidebarItems";
import { withAuth } from "@/utils/withAuth";
import Unauthorized from "@/pages/Unauthorized";
import { role } from "@/constants/role";
import type { TRole } from "@/types";
import Tours from "@/pages/Tours";
import TourDetails from "@/pages/TourDetails";
import HomePage from "@/pages/HomePage";


export const router = createBrowserRouter([
    {
        Component : App,
        path: "/",
        children: [
            {
                index:true,
                Component: HomePage
            },
            {
                path: "about",
                Component: About
            },
            {
                path: "tours",
                Component: Tours
            },
            {
                path: "tours/:id",
                Component: TourDetails
            },
        ]
    },
    {
        Component : withAuth(DashboardLayout, role.superAdmin as TRole),
        path: "/admin",
        children: [
            {index: true, element: <Navigate to="/admin/analytics"></Navigate>},
            ...generateRoutes(adminSidebarItems)]
    },
    {
        Component : withAuth(DashboardLayout, role.user as TRole),
        path: "/user",
        children: [
            {index: true, element: <Navigate to="/user/bookings"></Navigate>},
            ...generateRoutes(userSidebarItems)]
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
    {
       path: "/unauthorized",
       Component: Unauthorized
    },

])

