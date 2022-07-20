import { Avatar } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

import React from "react";

import { useStateValue } from "../../context/UserContext";

import "./Post.css";

const Post = ({ profileSrc, image, username, timestamp, message }) => {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={user.photoURL} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <div className="post__gray">
            <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
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
          <Avatar className="post__avatar" src={user.photoURL} />
          <ArrowDropDownOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Post;
