import React, { useState } from "react";

function Form({ addPost }) {
  const [post, setPost] = useState({
    title: "",
    author: "",
    body: "",
  });

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addPost(post);
    setPost({
      title: "",
      author: "",
      body: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h3> Write a blog post!</h3>
        </div>
        <div>
          <input
            onChange={handleChange}
            type="text"
            name="title"
            placeholder="Title"
            value={post.title}
            id="title"
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            type="text"
            name="author"
            placeholder="Author"
            value={post.author}
            id="author"
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            type="text"
            name="body"
            placeholder="Write Here!"
            value={post.body}
            id="body"
          />
        </div>
        <div>
          <button>Submit Post</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
