import React from "react";
import Result from "./Result";


const ResultsContainer = ({ artists, correctGuess, guess }) => {
  return (
    <div>
      {artists[0] && (<Result artist={artists[0].name} correctGuess={correctGuess} guess={guess} />)}
      {artists[1] && (<Result artist={artists[1].name} correctGuess={correctGuess} guess={guess} />)}
      {artists[2] && (<Result artist={artists[2].name} correctGuess={correctGuess} guess={guess} />)}
      {artists[3] && (<Result artist={artists[3].name} correctGuess={correctGuess} guess={guess} />)}
    </div>
  );
};

export default ResultsContainer;
