import React from "react";

function PostsList({ postList }) {
  return (
    <div>
      {postList.map((post) => (
        <div key={post.title}>
          <h3>{post.title}</h3>
          <p>{post.author}</p>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostsList;
