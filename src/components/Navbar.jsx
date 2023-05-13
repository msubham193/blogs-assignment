import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center align-middle w-full px-10 md:px-20  h-20 ">
      <h1 className="font-bold text-2xl  " onClick={() => navigate("/")}>
        Blog.
      </h1>

      <Button nav={true}  />
    </div>
  );
};

export default Navbar;
