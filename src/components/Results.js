import React from "react";
import ResultsContainer from "./result/ResultsContainer";

const Results = ({artists, correctGuess, guess}) => {
    return (
        <div>
            <ResultsContainer artists={artists} correctGuess={correctGuess} guess={guess}/>
            <button onClick={() => console.log("artist", artists, "correct guess", correctGuess, "guess", guess)}>debug</button>
        </div>
    );
};

export default Results;
