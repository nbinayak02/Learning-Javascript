import React from "react";

const PostCards = (data) => {
  return (
    <div className="postCard">
      <h3>{data.id}. {data.title}</h3>
      <p>{data.body}</p>
    </div>
  );
};

export default PostCards;
