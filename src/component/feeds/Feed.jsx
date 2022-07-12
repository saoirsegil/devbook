import React from "react";

import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";

import "./Feed.css";
import Post from "./Post";

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      <Post
        profileSrc="https://scontent.fmnl25-3.fna.fbcdn.net/v/t39.30808-6/288992530_5669659729713319_282062131013335484_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGpaPm3N8pBnUUIMBKpbFXL3JmLNA-dJT3cmYs0D50lPdIrr81pbqfYOGuNilt8XFziRpCfLIERhfxbLor6Fjnb&_nc_ohc=cCk1lG1uFRUAX-qPsoH&_nc_ht=scontent.fmnl25-3.fna&oh=00_AT-2QaGaOwLMiFzWbJMCDhV24habuCg6Mq3fwvcLFRovfg&oe=62CFC322"
        message="Awesome these days."
        timestamp="This is a timestamp"
        username="Jayson Prince Diaz"
        image="https://scontent-xsp1-1.xx.fbcdn.net/v/t1.18169-9/27867071_1900329179979745_5283409461996030452_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeFwTL2pM6BaStESjlRKUcmNgY2zT7lJjUaBjbNPuUmNRmVmSHcxNJ-Irge4GbG2_0PIm_vvrPSk_VMHxmgim0S5&_nc_ohc=pZ7JKz7KSWcAX9-3rdG&_nc_ht=scontent-xsp1-1.xx&oh=00_AT-ijl62QDaB-PWEldJuqtEGOnVnc4jPoVUnZB0cFBlurg&oe=62F438A9"
      />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
