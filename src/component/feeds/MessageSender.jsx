import { Avatar } from "@mui/material";
import React from "react";

import "./MessageSender.css";

import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import TagFacesIcon from "@mui/icons-material/TagFaces";

const MessageSender = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <div className="messageSender__avatar">
          <Avatar />
        </div>
        <form className="messageSender__input">
          <input placeholder={`What's on your mind?`} />
          <input placeholder="Image URL (Optional)" />
          <button onClick={handleSubmit} type="submit">
            Send
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideoCameraBackIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <TagFacesIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
