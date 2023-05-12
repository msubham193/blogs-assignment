import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../actions/fetchPosts";

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
  },
});

export const { fetchPostsStart, fetchPostsSuccess, fetchPostsError } =
  postsSlice.actions;

export default postsSlice.reducer;
