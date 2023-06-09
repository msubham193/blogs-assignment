import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ nav, handleSubmit }) => {
  const naviate = useNavigate();

  return (
    <div
      className="bg-black text-white p-1 md:p-2 cursor-pointer rounded-full px-3  text-center text-sm "
      onClick={() => (nav ? naviate("/create") : handleSubmit)}
    >
      Create Post
    </div>
  );
};

export default Button;
