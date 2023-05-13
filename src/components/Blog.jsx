import React, { useCallback } from "react";
import { MdDeleteOutline } from "react-icons/md";

const Blog = ({ title, body, id, posts, setPosts }) => {
  const handleDeletePost = useCallback(
    (id) => {
      alert(`are you sure you want to delete  ${title} ?`);
      const newPosts = posts.filter((post) => post.id !== id);

      setPosts(newPosts);
    },
    [posts, setPosts, title]
  );
  return (
    <div className="border border-cyan-600 p-5 text-center flex flex-col items-center rounded-lg">
      <h1 className="font-bold text-lg">{title.slice(0, 30)}</h1>
      <p className="text-gray-500 first-letter:text-lg">{body.slice(0, 100)}</p>
      <div
        className="p-1 shadow-md rounded-md mt-5 cursor-pointer"
        onClick={() => handleDeletePost(id)}
      >
        <MdDeleteOutline />
      </div>
    </div>
  );
};

export default Blog;
