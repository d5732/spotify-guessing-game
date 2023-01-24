import React from "react";
import { Link } from "react-router-dom";
import { Howler } from "howler";

const GuessChoice = ({ artist, setGuess }) => {
    return (
        <Link
            to="/results"
            onClick={() => {
                Howler.stop();
                setGuess(artist);
            }}
        >
            {artist}
        </Link>
    );
};

export default GuessChoice;
