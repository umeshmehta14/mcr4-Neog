import { createContext, useContext, useState } from "react";
import { forumData } from "../Data/Data";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [forums, setForums] = useState(forumData);
  const { posts } = forums;

  const HandleUpvote = (id, down) => {
    const updatedPosts = posts.map((post) =>
      post.postId === id
        ? {
            ...post,
            upvotes: down ? post.upvotes - 1 : post.upvotes + 1,
            downvotes: down ? post.downvotes + 1 : post.downvotes - 1,
          }
        : post
    );
    setForums({ ...forums, posts: updatedPosts });
  };

  const handleBookmark = (postId) => {
    const updatedPosts = posts.map((post) =>
      post.postId === postId
        ? { ...post, isBookmarked: !post.isBookmarked }
        : post
    );
    setForums({ ...forums, posts: updatedPosts });
  };
  const postFilter = (filter) => {
    const filteredPosts =
      filter === "latest"
        ? [...posts].sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          )
        : [...posts].sort((a, b) => b.upvotes - a.upvotes);
    setForums({ ...forums, posts: filteredPosts });
  };

  return (
    <DataContext.Provider
      value={{ forums, HandleUpvote, handleBookmark, postFilter }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
