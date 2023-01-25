import React, { useState } from "react";
import { Howl, Howler } from "howler";
import Button from "@material-ui/core/Button";

const PlayAudio = ({ idx, mp3, playing, setPlaying }) => {
    const [id, setId] = useState("");
    const [sound, setSound] = useState(
        new Howl({
            src: [mp3],
            format: ["mp3"],
            loop: true,
            volume: 0.1,
            html5: true
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

    return (
        <>
            {!playing[idx] && (
                <Button
                    onClick={handlePlay}
                    variant="outlined"
                    color="primary"
                    style={{ width: "100%" }}
                >
                    play
                </Button>
            )}
            {playing[idx] && (
                <Button
                    onClick={() => handlePause(id)}
                    variant="outlined"
                    color="primary"
                    style={{ width: "100%" }}
                >
                    pause
                </Button>
            )}
        </>
    );
};

export default PlayAudio;
