import { createSlice } from "@reduxjs/toolkit";
import { createPosts, fetchPosts } from "../actions/fetchPosts";

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,

  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    [fetchPosts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [createPosts.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [createPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts.push(action.payload);
    },
    [createPosts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export const { addPost } = postsSlice.actions;
export default postsSlice.reducer;
