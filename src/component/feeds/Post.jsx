import { Avatar } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

import React from "react";

import "./Post.css";

const Post = ({ profileSrc, image, username, timestamp, message }) => {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profileSrc} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <div className="post__gray">
            <p>Timestamp...</p>
            <PublicIcon />
          </div>
        </div>
      </div>

      <div className="post__bottom">
        <p>{message}</p>
      </div>
      <div className="post__image">
        <img src={image} alt="" />
      </div>

      <div className="post__options">
        <div className="post__option">
          <ThumbUpOutlinedIcon />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineOutlinedIcon />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMeOutlinedIcon />
          <p>Share</p>
        </div>
        <div className="post__option">
          <Avatar
            className="post__avatar"
            src="https://scontent.fmnl25-3.fna.fbcdn.net/v/t39.30808-6/288992530_5669659729713319_282062131013335484_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGpaPm3N8pBnUUIMBKpbFXL3JmLNA-dJT3cmYs0D50lPdIrr81pbqfYOGuNilt8XFziRpCfLIERhfxbLor6Fjnb&_nc_ohc=cCk1lG1uFRUAX-qPsoH&_nc_ht=scontent.fmnl25-3.fna&oh=00_AT-2QaGaOwLMiFzWbJMCDhV24habuCg6Mq3fwvcLFRovfg&oe=62CFC322"
          />
          <ArrowDropDownOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Post;
