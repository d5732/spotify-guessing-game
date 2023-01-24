import React from "react";
import { Link } from "react-router-dom";
import ResultsContainer from "./result/ResultsContainer";

const Results = ({ artists, correctGuess, guess }) => {
    return (
        <div>
            <ResultsContainer
                artists={artists}
                correctGuess={correctGuess}
                guess={guess}
            />
            <Link to="/">Home</Link>
            <button
                onClick={() =>
                    console.log(
                        "artist",
                        artists,
                        "correct guess",
                        correctGuess,
                        "guess",
                        guess
                    )
                }
            >
                debug
            </button>
        </div>
    );
};

export default Results;
