import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import postsReducer from "../slices/postSlice";

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

export default store;
