import React from "react";

import { data } from "../data";
import Blog from "./Blog";
import { useSelector } from "react-redux";

const Feed = () => {
  const { loading, posts, error } = useSelector((state) => state.posts);

  return (
    <div className="flex flex-col justify-center items-center align-middle ">
      <form className=" relative mt-10 flex items-center justify-center  sm:w-[40%]">
        <input
          type="text"
          placeholder="Search for a blogs.."
          // value={searchText}
          // onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>{" "}
      {error ? (
        <div className="text-red-800 ">Error happens</div>
      ) : (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3   gap-4 mt-10 ">
          {posts.map((item, i) => (
            <Blog
              key={item.id}
              title={item.title}
              body={item.body}
              userId={item.userId}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Feed;
