import React, { useEffect, useState } from "react";
import { useData } from "../../Context/DataContext";
import PostBox from "../../Components/PostBox/PostBox";
import "./Home.css";

const Home = () => {
  const { forums, postFilter } = useData();
  const { posts } = forums;

  const [sortValue, setSortValue] = useState("latest");

  useEffect(() => postFilter(sortValue), []);
  return (
    <div className="home-container">
      <div className="post-container">
        <h2>Latest Posts</h2>
        {posts.map((postData) => (
          <PostBox key={postData.accountId} postData={postData} />
        ))}
      </div>
      <div className="sort-section">
        <h2>Sort By</h2>
        <select
          value={sortValue}
          onChange={(e) => {
            postFilter(e.target.value);
            setSortValue(e.target.value);
          }}
        >
          <option value="latest">Latest Posts</option>
          <option value="voted">Most Upvoted</option>
        </select>
      </div>
    </div>
  );
};

export default Home;
