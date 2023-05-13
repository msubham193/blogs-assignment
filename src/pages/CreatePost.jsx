import { useState } from "react";

import Form from "../components/Form";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { createPosts } from "../redux/actions/fetchPosts";

const CreatePost = () => {
  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ title: "", desc: "" });
  const { error } = useSelector((state) => state.posts);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const createPost = async () => {
    setIsSubmitting(true);

    dispatch(createPosts(post));
    if (!error) {
      navigate("/");
      return;
    }
    console.log(error);
    alert(error.message);
  };

  return (
    <div className=" px-5 md:px-20">
      <Form
        type="Create"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={createPost}
      />
    </div>
  );
};

export default CreatePost;
