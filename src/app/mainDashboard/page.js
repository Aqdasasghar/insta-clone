import React from "react";
import Header from "../header/page";
import Navbar from "../navBar/page";
import SideBar from "../sideBar/page";
import Post from "../post/page";
import "./dashboard.css";
import Image from 'next/image';
import instagramImage from './instagram.png';
function MainDashboard() {
  return (
    <div>
      <div>
      <Image className="ins" src={instagramImage} alt="Instagram Image"  height={150} />
      </div>
      <Navbar />
      <Post />
      <SideBar />
    </div>
  );
}

export default MainDashboard;
