import { role } from "@/constants/role";
import { adminSidebarItems } from "@/routes/adminSideBarItems";
import { userSidebarItems } from "@/routes/userSidebarItems";
import type { TRole } from "@/types";

export const getSidebarItems = (userRole: TRole) =>{
    switch(userRole){
        case role.superAdmin:
            return [...adminSidebarItems]
            // return [...adminSidebarItems, ...userSidebarItems]
            case role.admin:
                return [...adminSidebarItems]
        case role.user:
            return [...userSidebarItems]
        default:
            return []
    }
}