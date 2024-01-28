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
    menutitle: "Dashboard",
    items: [
      {
        path: `/dashboard`,
        icon: <HomeSvg />,
        title: "Dashboard",
        type: "link",
      },
    ],
  },

  {
    menutitle: "Api Secrets",
    items: [
      {
        path: `/add-api`,
        icon: <HomeSvg />,
        title: "Api Secrets",
        type: "link",
      },
    ],
  },
  // {
  //   menutitle: "Support",
  //   items: [
  //     {
  //       title: "Add Api",
  //       icon: <HomeSvg />,
  //       pathSlice: "suHportticket",
  //       type: "sub",
  //       active: false,
  //       items: [
  //         { path: `/supportticket`, title: "", type: "link" },
  //       ],
  //     },
  //   ],
  // },
];
