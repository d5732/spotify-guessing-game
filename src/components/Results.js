import React from "react";
import ResultsContainer from "./result/ResultsContainer";

const Results = ({artists, correctGuess, guess}) => {
    return (
        <div>
            <ResultsContainer artists={artists} correctGuess={correctGuess} guess={guess}/>
        </div>
    );
};

export default Results;
