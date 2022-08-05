import React from "react";

const PostAddForms = () => {
  return (
    <form className="bottom-panel d-flex">
      <input
        type="text"
        placeholder="Share your thoughts"
        className="form-control new-post-label"
      />
      <button type="submit" className="btn btn-outline-secondary">
        Add
      </button>
    </form>
  );
};
export default PostAddForms;