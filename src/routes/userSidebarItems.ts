import Bookings from "@/pages/User/Bookings";
import type { ISideBarItem } from "@/types";

export const userSidebarItems: ISideBarItem[] = [
    {
        title: "History",
        items: [
            {
                title: "Bookings",
                url: "/user/bookings",
                component: Bookings
            },
        ],
    },

]