import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  } catch (error) {
    alert(error.message);
  }
});

export const deletePosts = createAsyncThunk("posts/deletePosts", async (id) => {
  try {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error.message);
  }
});

export const createPosts = createAsyncThunk(
  "posts/createPost",
  async (post) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify({
            title: post.title,
            body: post.desc,
            userId: 1,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      alert("Post created successfully");
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);
