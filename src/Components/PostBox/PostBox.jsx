import React from "react";
import "./PostBox.css";
import { getRelativeTime } from "../../Utils/getRelativeTime";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import { AiOutlineArrowLeft, AiOutlineHeart } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import {
  GoBookmarkFill,
  GoComment,
  GoBookmark,
  GoShareAndroid,
} from "react-icons/go";
import { useData } from "../../Context/DataContext";
import { useNavigate } from "react-router-dom";

const PostBox = ({ postData, showComment }) => {
  const { HandleUpvote, handleBookmark } = useData();
  const navigate = useNavigate();
  const {
    name,
    username,
    picUrl,
    postDescription,
    postId,
    post,
    upvotes,
    downvotes,
    tags,
    createdAt,
    comments,
    isBookmarked,
  } = postData;
  return (
    <main className="post-container-main">
      {showComment && (
        <header>
          <AiOutlineArrowLeft className="icon" onClick={() => navigate("/")} />
          Post
        </header>
      )}
      <div className="main-post-box">
        <section className="votes-box">
          <BiSolidUpArrow
            title="Upvote"
            className="upvote-icon"
            onClick={() => HandleUpvote(postId)}
          />
          {upvotes}
          <BiSolidDownArrow
            title="Downvote"
            className="vote-icon"
            onClick={() => HandleUpvote(postId, true)}
          />
        </section>
        <section className="post-information">
          <nav className="post-nav">
            <img src={picUrl} alt={name} width={"50px"} />
            <span className="posted-by">Posted By</span>
            <span className="username">@{username}</span>
            <BsDot className="gray" />
            <span className="time">{getRelativeTime(createdAt)}</span>
          </nav>
          <h3 className="post-heading">{post}</h3>
          <div className="tag-box">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className="description">{postDescription}</div>
          <hr />
          <div className="post-icons">
            <GoComment
              title="Comment"
              className="icon-2"
              onClick={() => navigate(`/singlepost/${postId}`)}
            />
            <GoShareAndroid title="Share" className="icon-2" />
            {isBookmarked ? (
              <GoBookmarkFill
                title="Remove Bookmark"
                className="icon-2"
                onClick={() => handleBookmark(postId)}
              />
            ) : (
              <GoBookmark
                title="Bookmark"
                className="icon-2"
                onClick={() => handleBookmark(postId)}
              />
            )}
          </div>
        </section>
      </div>
      {showComment &&
        (comments.length === 0 ? (
          <h2>No Comments Yet</h2>
        ) : (
          <section className="comment-section">
            {comments.map((comm) => {
              const {
                commentId,
                username,
                picUrl,
                likes,
                comment,
                name,
                createdAt,
              } = comm;
              return (
                <div key={commentId} className="comment--main-box">
                  <div className="comment-pic">
                    <img src={picUrl} alt={username} width={"40px"} />
                  </div>
                  <div className="comment-info">
                    <div className="comment-username">
                      <section className="upper-section">
                        <span className="comm-name">{name}</span>
                        <span className="comm-username">@{username}</span>
                        <BsDot className="gray" />
                        <span className="time">
                          {getRelativeTime(createdAt)}
                        </span>
                      </section>
                      <section className="lower-section">
                        <span className="posted-by-2">Replying to</span>
                        <span className="username">@{postData.username}</span>
                      </section>
                    </div>
                    <div className="comm-text">{comment}</div>
                    <div className="post-icons">
                      <AiOutlineHeart title="Comment" className="icon-2" />
                      <GoComment title="Comment" className="icon-2" />
                      <GoShareAndroid title="Share" className="icon-2" />
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
        ))}
    </main>
  );
};

export default PostBox;
