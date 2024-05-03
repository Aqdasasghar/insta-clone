// Sidebar.js

import React from "react";
import {
  FaHome,
  FaSearch,
  FaPlusSquare,
  FaHeart,
  FaUser,
} from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { CiBookmarkPlus } from "react-icons/ci";
import { IoSettings } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdHelpOutline } from "react-icons/md";
import "./sideBar.css";
import Link from "next/link";

const SideBar = () => {
  return (
    <>
      <div className="sidebar">
        <ul className="sidebarList">
          <li>
            <img src="" />
          </li>
          <li>
            <FaHome />
            <span className="custom">Home</span>
          </li>
          <li>
            <FaSearch />
            <span className="custom">Explore</span>
          </li>
          <li>
            <Link
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              href="/addPost"
            >
              <FaPlusSquare />
              <span className="custom">New Post</span>
            </Link>
          </li>
          <li>
            <FaHeart />
            <span className="custom">Activity</span>
          </li>
          <li>
            <Link
              href="/profile"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <FaUser />
              <span className="custom">Profile</span>
            </Link>
          </li>
          <li>
            <IoMdNotificationsOutline />
            <span className="custom">Notifications</span>
          </li>
          <li>
            <MdMessage />
            <span className="custom">Messages</span>
          </li>
          <li>
            <CiBookmarkPlus />
            <span className="custom">Bookmarks</span>
          </li>
          <li>
            <IoSettings />
            <span className="custom">Settings</span>
          </li>
          <li>
            <MdHelpOutline />
            <span className="custom">Help</span>
          </li>
        </ul>
      </div>
      <div className="Rightsidebar">as adssssssssssssssssssssk</div>
    </>
  );
};

export default SideBar;
