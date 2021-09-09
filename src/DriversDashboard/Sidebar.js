import React from "react";
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
    title: "Accept/Reject Offer",
    path: "/accept-reject-offer",
    icon: <FaComments />,
    className: "nav-text",
  },
  {
    title: "Ride History",
    path: "/driver-ride-history",
    icon: <FaComments />,
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
