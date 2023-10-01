import React from "react";

function Tag({ tag }) {
  return (
    <div className="tagContainer">
      <span className="tagButton">{tag}</span>
    </div>
  );
}
export default Tag;
