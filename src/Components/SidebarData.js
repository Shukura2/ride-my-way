import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import Homes from '../Components/Pages/Homes';
import {FaCarSide} from 'react-icons/fa';
import {FaSignOutAlt} from 'react-icons/fa'

export const SidebarData = [
  {
    title: "My Dashboard",
    path: "/dashboard",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Available Rides",
    path: "/map",
    icon: <FaCarSide />,
    cName: "nav-text",
  },
  {
    title: "Logout",
    path: "/home",
    icon: <FaSignOutAlt />,
    cName: "nav-text",
  },
];
