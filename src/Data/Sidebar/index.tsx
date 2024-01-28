import { SidebarMenuInterFace } from "@/Type/Sidebar";
import { HomeSvg } from "../../svgIcons";

export const SidebarMenu: SidebarMenuInterFace[] = [
  {
    menutitle: "Home",
    items: [
      {
        path: `/home`,
        icon: <HomeSvg />,
        title: "Home",
        type: "link",
      },
    ],
  },

  {
    menutitle: "Bookmarks",
    items: [
      {
        path: `/bookmarks`,
        icon: <HomeSvg />,
        title: "Dashboard",
        type: "link",
      },
    ],
  },
  {
    menutitle: "Support",
    items: [
      {
        title: "Add Api",
        icon: <HomeSvg />,
        pathSlice: "supportticket",
        type: "sub",
        active: false,
        items: [
          { path: `/supportticket`, title: "Support Ticket", type: "link" },
        ],
      },
    ],
  },
];
