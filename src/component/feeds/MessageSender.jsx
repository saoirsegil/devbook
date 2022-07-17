import { Avatar } from "@mui/material";
import React, { useState } from "react";

import "./MessageSender.css";

import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import TagFacesIcon from "@mui/icons-material/TagFaces";

import { useStateValue } from "../../context/UserContext";

const MessageSender = () => {
  const [input, setInput] = useState("");
  const [inputImage, setInputImage] = useState("");

  const [{ user }, dispatch] = useStateValue();

  const handleSubmit = (e) => {
    e.preventDefault();

    setInput("");
    setInputImage("");
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            placeholder={`What's on your mind? ${user.displayName}`}
          />
          <input
            value={inputImage}
            onChange={(e) => setInputImage(e.target.value)}
            placeholder="Image URL (Optional)"
            className="messageSender__imageInput"
          />
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
