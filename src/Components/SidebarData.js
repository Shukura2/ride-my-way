import React from "react";
// import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import { FaCarSide } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";

export const SidebarData = [
  {
    title: "My Dashboard",
    path: "/dashboard",
    icon: <AiIcons.AiFillHome />,
    className: "nav-text",
  },
  {
    title: "Available Rides",
    path: "/map",
    icon: <FaCarSide />,
    className: "nav-text",
  },
  {
    title: "Logout",
    path: "/home",
    icon: <FaSignOutAlt />,
    className: "nav-text",
  },
];
