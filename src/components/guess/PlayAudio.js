import React, { useState } from "react";
import styled from "styled-components";
import { Howl, Howler } from "howler";

const PlayButton = styled.button`
    padding: 1rem;
`;

const PlayAudio = ({ mp3 }) => {
    const [id, setId] = useState("");
    const [sound, setSound] = useState(
        new Howl({
            src: [mp3],
            format: ["mp3"],
            volume: 0.01,
        })
    );
    const [playing, setPlaying] = useState(false);

    const handlePlay = () => {
        setPlaying(true);
        setId(sound.play());
    };
    const handlePause = (id) => {
        setPlaying(false);
        sound.pause(id);
    };

    console.log("Play audio re-rendered", id);
    return (
        <>
            <button onClick={() => console.log("boolean", playing, "id", id)}>
                debug
            </button>
            {!playing && <PlayButton onClick={handlePlay}>play</PlayButton>}
            {playing && (
                <PlayButton onClick={() => handlePause(id)}>pause</PlayButton>
            )}
        </>
    );
};

export default PlayAudio;
