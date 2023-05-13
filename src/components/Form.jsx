import React from "react";
const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="">{type} Post</span>
      </h1>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            title
          </span>
          <input
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            type="text"
            placeholder="Enter title"
            required
            className="form_input"
          />
        </label>
        <label>
          <span className=" font-semibold text-base text-gray-700">
            description
          </span>

          <textarea
            value={post.desc}
            onChange={(e) => setPost({ ...post, desc: e.target.value })}
            placeholder="Write your post here"
            required
            className="form_textarea"
          />
        </label>

        <div className="flex justify-end items-center mx-3 mb-5 gap-4">
          <a href="/" className="text-gray-500 text-sm">
            Cancel
          </a>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-black rounded-full text-white"
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
