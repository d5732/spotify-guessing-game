import React, { useState } from "react";
import Button from "@material-ui/core/Button";

const ConfigChoice = ({ number, config, setConfig, type }) => {
    const handleClick = (e) => {
        if (type === "artists") {
            setConfig({ ...config, qtyArtists: number });
        } else {
            setConfig({ ...config, qtySongs: number });
        }
    };

    let selectedStyle;
    if (type === "artists") {
        if (config.qtyArtists === number) {
            selectedStyle = { background: "black", color: "white" };
        }
    } else {
        if (config.qtySongs === number) {
            selectedStyle = { background: "black", color: "white" };
        }
    }

    return (
        <Button
            disabled={
                type === "artists"
                    ? config.qtyArtists === number
                    : config.qtySongs === number
            }
            onClick={handleClick}
            variant="contained"
            style={{
                marginLeft: "auto",
                marginRight: "auto",
                width: "10rem",
                ...selectedStyle,
            }}
        >
            {number}
        </Button>
    );
};

export default ConfigChoice;
