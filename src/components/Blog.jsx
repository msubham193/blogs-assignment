import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { MdDeleteOutline } from "react-icons/md";
const Blog = ({ title, body, userId }) => {
  return (
    <div className="border border-cyan-600 p-5 text-center flex flex-col items-center rounded-lg">
      <i class="fa-regular fa-trash"></i>
      <h1 className="font-bold text-lg">{title.slice(0, 30)}</h1>
      <p className="text-gray-500 first-letter:text-lg">{body.slice(0, 100)}</p>
      <div className="p-1 shadow-md rounded-md mt-5 cursor-pointer">
        <MdDeleteOutline />
      </div>
    </div>
  );
};

export default Blog;
