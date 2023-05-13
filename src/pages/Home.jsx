import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Feed from "../components/Feed";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions/fetchPosts";

const Home = () => {
  const dispatch = useDispatch();

  const { loading, posts } = useSelector((state) => state.posts);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    dispatch(fetchPosts());
  };

  return (
    <div className="md:px-20 px-10">
      <Hero />
      {loading ? "Loading...." : <Feed posts={posts} />}
    </div>
  );
};

export default Home;
