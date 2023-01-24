import React from "react";

const Result = ({ artist, correctGuess, guess }) => {
    return (
        <div>
            {artist}
            {artist === correctGuess && "Correct"}
            {artist === guess && "Guessed"}
        </div>
    );
};

export default Result;
