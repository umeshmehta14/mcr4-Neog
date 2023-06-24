import React from "react";
import { AiOutlineHome, AiOutlineRocket } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GoBookmark } from "react-icons/go";

import "./Sidebar.css";
import { useData } from "../../Context/DataContext";

const SideBar = () => {
  const { forums } = useData();
  const { username, name, picUrl } = forums;
  return (
    <nav className="sidebar-box">
      <ul>
        <li>
          <AiOutlineHome className="icon" />
          <p>Home</p>
        </li>
        <li>
          <AiOutlineRocket className="icon" />
          <p>Explore</p>
        </li>
        <li>
          <GoBookmark className="icon" />
          <p>Bookmarks</p>
        </li>
        <li>
          <CgProfile className="icon" />
          <p>Profile</p>
        </li>
      </ul>
      <div className="profile-box">
        <div className="user-pic">
          <img src={picUrl} alt={username} width={"30px"} />
        </div>
        <div className="main-user-info">
          <strong>{name}</strong>
          <small>@{username}</small>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
