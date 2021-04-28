import React from "react";
import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
import { FaCarSide } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { FaDesktop } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { FaCreditCard } from 'react-icons/fa'
import { FaComments } from 'react-icons/fa'

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/drive",
    icon: <FaDesktop />,
    className: "nav-text",
  },
  {
    title: "User Profile",
    path: "/user-profile",
    icon: <FaUserAlt />,
    className: "nav-text",
  },
  {
    title: "Payment",
    path: "/",
    icon: <FaCreditCard />,
    className: "nav-text",
  },
  {
    title: "Feedback",
    path: "/feed-back",
    icon: <FaComments />,
    className: "nav-text",
  },
  {
    title: "Logout",
    path: "/home",
    icon: <FaSignOutAlt />,
    className: "nav-text",
  },
];
