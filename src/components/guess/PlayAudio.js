import React, { useState } from "react";
import styled from "styled-components";
import { Howl, Howler } from "howler";

const PlayButton = styled.button`
    padding: 1rem;
`;

const PlayAudio = ({ idx, mp3, playing, setPlaying }) => {
    const [id, setId] = useState("");
    const [sound, setSound] = useState(
        new Howl({
            src: [mp3],
            format: ["mp3"],
            loop: true,
            volume: 0.1,
        })
    );

    const handlePlay = () => {
        if (Object.values(playing).includes(true)) {
            Howler.stop();
        }
        setPlaying({ [idx]: true });
        setId(sound.play());
    };
    const handlePause = (id) => {
        setPlaying({});
        sound.pause(id);
    };

    // console.log("Play audio re-rendered", id);
    return (
        <>
            <button
                onClick={() =>
                    console.log("playing:", playing, "sound", sound, "id", id)
                }
            >
                debug
            </button>
            {!playing[idx] && (
                <PlayButton onClick={handlePlay}>play</PlayButton>
            )}
            {playing[idx] && (
                <PlayButton onClick={() => handlePause(id)}>pause</PlayButton>
            )}
        </>
    );
};

export default PlayAudio;
