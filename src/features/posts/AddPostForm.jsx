import { useState } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import { postAdded } from "./postsSlice";
import { nanoid } from "@reduxjs/toolkit";

const AddPostForm = () => {
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");
  const newPostToPush = {
    id: 4,
    title: newPostTitle,
    content: newPostContent,
  };
  const dispatch = useDispatch();
  const pushToAddState = (e) => {
    e.preventDefault();
    if (newPostToPush.title && newPostToPush.content) {
      dispatch(postAdded(newPostToPush));
    } else {
      return;
    }
  };

  return (
    <div className="AddPostForm">
      <h2>Add a New Post</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="postTitle">Post Title</label>
        <input
          type="text"
          name="postTitle"
          id="postTitle"
          onChange={(e) => setNewPostTitle(e.target.value)}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          name="postContent"
          id="postContent"
          onChange={(e) => setNewPostContent(e.target.value)}
        ></textarea>
        <button onClick={pushToAddState}>Save Post</button>
      </form>
    </div>
  );
};

export default AddPostForm;
