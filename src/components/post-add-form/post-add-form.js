import React from "react";

const PostAddForms = ({onAdd}) => {
  return (
    <div className="bottom-panel d-flex">
      <input
        type="text"
        placeholder="Share your thoughts"
        className="form-control new-post-label"
      />
      <button type="submit" 
      className="btn btn-outline-secondary"
      onClick={() => onAdd("Hello")}
      >
        Add
      </button>
    </div>
  );
};
export default PostAddForms;