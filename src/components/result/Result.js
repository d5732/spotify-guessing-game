import React from "react";

const Result = ({ artist, correctGuess, guess }) => {
  return (
    <div>
      {artist}
      {artist === correctGuess && "Correct"}
      {artist === guess && "Yes"}
      {artist !== guess && "No"}
    </div>
  );
};

export default Result;
