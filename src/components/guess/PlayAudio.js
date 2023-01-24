import React from "react";
import styled from "styled-components";
import { Howl, Howler } from "howler";

const PlayButton = styled.button`
    padding: 1rem;
`;

const PlayAudio = ({ mp3 }) => {
    console.log("mp3", mp3);
    const handleClick = () => {
        var sound = new Howl({
            src: [mp3],
            format: ["mp3"],
            volume: 0.01,
        });
        console.log("sound", sound);
        sound.load();
        sound.play();
    };

    return (
        <PlayButton onClick={handleClick}>
            {/* <audio controls>
                <source src={mp3} type="audio/mp3" />
            </audio>  */}
            button
        </PlayButton>
    );
};

export default PlayAudio;
