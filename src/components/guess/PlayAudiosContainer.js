import React, { useState } from "react";
import PlayAudio from "./PlayAudio";
import Box from "@material-ui/core/Box";

const PlayAudiosContainer = ({ songs }) => {
    const [playing, setPlaying] = useState({ 0: false, 1: false, 2: false });

    return (
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          style={{gap: "1rem"}}
        >
            {songs[0] && (
                <PlayAudio
                    idx={0}
                    mp3={songs[0].preview_url}
                    playing={playing}
                    setPlaying={setPlaying}
                />
            )}
            {songs[1] && (
                <PlayAudio
                    idx={1}
                    mp3={songs[1].preview_url}
                    playing={playing}
                    setPlaying={setPlaying}
                />
            )}
            {songs[2] && (
                <PlayAudio
                    idx={2}
                    mp3={songs[2].preview_url}
                    playing={playing}
                    setPlaying={setPlaying}
                />
            )}
        </Box>
    );
};

export default PlayAudiosContainer;
