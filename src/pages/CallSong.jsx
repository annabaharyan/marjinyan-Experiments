import React from "react";
import Song from "../components/Song";

export default function CallSong() {
  const songs = [
    { title: "I have Nothing", singer: "Whitney Huston", duration: "3" },
    { title: "Imagine", singer: "John Lenon", duration: "5.3" },
    { title: "Yesterday", singer: "The Beatles", duration: "4.2" },
  ];
  return (
    <div>
        
        {songs.map((song,index)=>(
            <Song key={index} title={song.title} singer={song.singer} duration={song.duration}/>
        ))}
      
      
    </div>
  );
}
