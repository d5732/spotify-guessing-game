import React, { useState } from "react";
import { Howler } from "howler";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";
import throttle from "lodash/throttle";

const Volume = () => {
    const [volume, setVolume] = useState(1);
    const handleChange = throttle((event, newValue) => {
        setVolume(Number(newValue));
        Howler.volume(Number(newValue));
    }, 15);

    return (
        <Grid container spacing={2}>
            <Grid item>
                <VolumeDown />
            </Grid>
            <Grid item xs>
                <Slider
                    min={0}
                    max={1}
                    step={0.01}
                    value={volume}
                    onChange={handleChange}
                    aria-labelledby="continuous-slider"
                />
            </Grid>
            <Grid item>
                <VolumeUp />
            </Grid>
        </Grid>
    );
};

export default Volume;
