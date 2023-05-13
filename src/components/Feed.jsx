import React, { useState } from "react";

import { data } from "../data";
import Blog from "./Blog";
import { useSelector } from "react-redux";

const Feed = ({ posts }) => {
  const [post, setPost] = useState(posts);
  const [searchText, setSearchText] = useState("");

  const { error } = useSelector((state) => state.posts);
  const [searchTimeout, setSearchTimeout] = useState(null);

  const filterPosts = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return posts.filter(
      (item) => regex.test(item.title) || regex.test(item.desc)
    );
  };
  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPosts(e.target.value);
        setPost(searchResult);
      }, 500)
    );
  };

  const compareTitles = (a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  };

  const onSortClick = async () => {
    const sorted = [...post].sort(compareTitles);
    setPost(sorted);
  };

  return (
    <div className="flex flex-col justify-center items-center align-middle ">
      <div className="w-full flex  justify-center  align-middle ">
        <form className="mt-10 flex items-center justify-center  sm:w-[40%]">
          <input
            type="text"
            placeholder="Search for a blogs.."
            value={searchText}
            onChange={handleSearchChange}
            required
            className="search_input peer"
          />
        </form>{" "}
        <div
          className=" mt-10 ml-5 h-10 cursor-pointer bg-black p-2 rounded-lg text-white"
          onClick={onSortClick}
        >
          Sort
        </div>
      </div>

      {error ? (
        <div className="text-red-800 ">Error happens</div>
      ) : (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3   gap-4 mt-10 ">
          {post?.map((item, i) => (
            <Blog
              key={item.id}
              title={item.title}
              body={item.body}
              id={item.id}
              posts={post}
              setPosts={setPost}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Feed;
