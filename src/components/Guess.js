import React from "react";
import styled from "styled-components";
import PlayAudiosContainer from "./guess/PlayAudiosContainer";
import GuessChoicesContainer from "./guess/GuessChoicesContainer";
import Volume from "./guess/Volume";

const Guess = ({ artists, songs, setGuess }) => {
    return (
        <div>
            <h1>Can you guess the artist?</h1>

            {songs && <PlayAudiosContainer songs={songs} />}
            {artists && (
                <GuessChoicesContainer artists={artists} setGuess={setGuess} />
            )}
            <Volume />
            <button
                onClick={() => console.log("songs", songs, "artists", artists)}
            >
                debug
            </button>
        </div>
    );
};

export default Guess;
