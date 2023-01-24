import React, { useState } from "react";
import { Howler } from "howler";

const Volume = () => {
    const [volume, setVolume] = useState(1);

    return (
        <div>
            <input
                type="range"
                min={0}
                max={1}
                step={0.1}
                value={volume}
                onChange={(event) => {
                    setVolume(event.target.valueAsNumber);
                    Howler.volume(event.target.valueAsNumber);
                }}
            />
        </div>
    );
};

export default Volume;
