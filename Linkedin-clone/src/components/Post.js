import React from "react";

function Post({ name, content, likes }) {
  return (
    <div className="card p-3 mb-3 shadow-sm">
      <h6><strong>{name}</strong></h6>
      <p>{content}</p>
      <button className="btn btn-outline-primary btn-sm">Like ({likes})</button>
    </div>
  );
}

export default Post;
