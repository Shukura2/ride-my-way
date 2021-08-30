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
    path: "/dashboard-driver",
    icon: <FaDesktop />,
    className: "nav-text",
  },
  {
    title: "Create Offer",
    path: "/create-offer",
    icon: <FaUserAlt />,
    className: "nav-text",
  },
  {
    title: "My Offer",
    path: "/my-offers",
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
