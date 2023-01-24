import React from "react";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";
import { Howler } from "howler";

const GuessChoice = ({ artist, setGuess }) => {
    return (
        <Button
            component={Link}
            to="/results"
            onClick={() => {
                Howler.stop();
                setGuess(artist);
            }}
            variant="contained"
            color="primary"
            style={{ width: "100%", textAlign: "center" }}
        >
            {artist}
        </Button>
    );
};

export default GuessChoice;
