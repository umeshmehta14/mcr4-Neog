import React from "react";
import { useParams } from "react-router-dom";
import { useData } from "../../Context/DataContext";
import PostBox from "../../Components/PostBox/PostBox";

import "./SingleForum.css";

const SingleForum = () => {
  const { postId } = useParams();
  console.log(postId);
  const { forums } = useData();
  const selectedPost = forums.posts.find((post) => post.postId === postId);
  return (
    <div className="single-container">
      <div className="post-container">
        <PostBox postData={selectedPost} showComment={true} />
      </div>
    </div>
  );
};

export default SingleForum;
