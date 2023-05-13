import { useState } from "react";

import Form from "../components/Form";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ title: "", desc: "" });
  const { error } = useSelector((state) => state.posts);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const createPosts = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // console.log(post);
    dispatch(createPosts(post));
    if (!error) {
      navigate("/");
      return;
    }
    alert(error.message);
  };

  return (
    <div className=" px-5 md:px-20">
      <Form
        type="Create"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={createPosts}
      />
    </div>
  );
};

export default CreatePost;
