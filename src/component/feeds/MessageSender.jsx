import { Avatar } from "@mui/material";
import React, { useState } from "react";

import "./MessageSender.css";

import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import TagFacesIcon from "@mui/icons-material/TagFaces";

const MessageSender = () => {
  const [input, setInput] = useState("");
  const [inputImage, setInputImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setInput("");
    setInputImage("");
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src="https://scontent.fmnl25-3.fna.fbcdn.net/v/t39.30808-6/288992530_5669659729713319_282062131013335484_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGpaPm3N8pBnUUIMBKpbFXL3JmLNA-dJT3cmYs0D50lPdIrr81pbqfYOGuNilt8XFziRpCfLIERhfxbLor6Fjnb&_nc_ohc=cCk1lG1uFRUAX-qPsoH&_nc_ht=scontent.fmnl25-3.fna&oh=00_AT-2QaGaOwLMiFzWbJMCDhV24habuCg6Mq3fwvcLFRovfg&oe=62CFC322" />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            placeholder={`What's on your mind?`}
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
