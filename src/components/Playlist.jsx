import React from "react";

const Playlist = (props) => {
  return (
    <div className="playlist">
      <h1>PlayList</h1>
      <div className="buttons">
        <button className="btn">Download All</button>
        <button className="btn">Play All</button>
      </div>

      {props.children}
    
    </div>
  );
};

export default Playlist;
