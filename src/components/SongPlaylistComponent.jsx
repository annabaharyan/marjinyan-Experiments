import React from "react";
import CallSong from "../pages/CallSong";
import Playlist from "./Playlist";

const SongPlaylistComponent = () => {
  return (
    <div>
      <Playlist>
        <CallSong />
      </Playlist>
    </div>
  );
};

export default SongPlaylistComponent;
