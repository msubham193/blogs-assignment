import React from "react";
import Hero from "../components/Hero";
import Feed from "../components/Feed";

const Home = () => {
  return (
    <div className="md:px-20 px-10">
      <Hero />
      <Feed />
    </div>
  );
};

export default Home;
