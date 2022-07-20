import React, { useState, useEffect } from "react";

import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";

import "./Feed.css";
import Post from "./Post";
import { db } from "../../utils/firebase";
import { collection, getDocs } from "firebase/firestore";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      const dataMap = data.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      setPosts(dataMap);
    };
    getPosts();
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
    </div>
  );
};

export default Feed;
