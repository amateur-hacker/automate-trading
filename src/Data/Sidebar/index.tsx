import { SidebarMenuInterFace } from "@/Type/Sidebar";
import { HomeSvg } from "../../svgIcons";
import { Settings, Link, Info, Activity } from "react-feather";

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
        icon: <Settings />,
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
        icon: <Link />,
        title: "Api Details",
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

  {
    menutitle: "WebHook Logs",
    items: [
      {
        path: `/logs/webhook`,
        icon: <Activity />,
        title: "WebHook Logs",
        type: "link",
      },
    ],
  },
];
