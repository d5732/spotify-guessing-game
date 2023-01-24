import React from "react";
import PlayAudio from "./PlayAudio";
const PlayAudiosContainer = ({songs}) => {
  return (
    <div>
      {songs[0] && <PlayAudio mp3={songs[0].preview_url} />}
      {songs[1] && <PlayAudio mp3={songs[1].preview_url} />}
      {songs[2] && <PlayAudio mp3={songs[2].preview_url} />}
    </div>
  );
};

export default PlayAudiosContainer;
