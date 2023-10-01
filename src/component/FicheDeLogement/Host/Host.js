import React from "react";

function Host({ hostName, hostPic }) {
  return (
    <aside className="host-comp">
      <div className="host-name">{hostName}</div>
      <div className="hostPicture">
        <img src={hostPic} alt={hostName} />
      </div>
    </aside>
  );
}

export default Host;
