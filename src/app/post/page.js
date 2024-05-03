// PostCard.js
"use client";
import React, { useState, useEffect } from "react";
import { getingAds } from "../config/fireBase";
import "./post.css";

import { AiFillLike } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";
import { TbLocationShare } from "react-icons/tb";

const PostCard = () => {
  const [posts, setosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const getPost = await getingAds();
    setosts(getPost);
    console.log(getPost);
  };

  return (
    <>
      {posts.map((post) => {
        return (
          <div className="container">
            <div className="card">
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3541/3541871.png"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    margin: "10px",
                  }}
                />
                <h3>Aqdas</h3>
              </div>
              <div className="card-body">
                <div color="cardImg">
                  <img
                    src={!post.image ? "no image Upload" : post.image}
                    className="card-img-top"
                    alt="..."
                  />
                </div>

                <p className="card-text">
                  {!post.description ? "No Description" : post.description}
                </p>
                <div className="actionDiv">
                  <AiFillLike className="action" />
                  <FaCommentDots className="action" />
                  <TbLocationShare className="action" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PostCard;
