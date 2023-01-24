import React from "react";
import Result from "./Result";
import Box from "@material-ui/core/Box";


const ResultsContainer = ({ artists, correctGuess, guess }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexDirection="column"
      style={{ gap: "1rem" }}
    >
      {artists[0] && (
        <Result
          artist={artists[0].name}
          correctGuess={correctGuess}
          guess={guess}
        />
      )}
      {artists[1] && (
        <Result
          artist={artists[1].name}
          correctGuess={correctGuess}
          guess={guess}
        />
      )}
      {artists[2] && (
        <Result
          artist={artists[2].name}
          correctGuess={correctGuess}
          guess={guess}
        />
      )}
      {artists[3] && (
        <Result
          artist={artists[3].name}
          correctGuess={correctGuess}
          guess={guess}
        />
      )}
    </Box>
  );
};

export default ResultsContainer;
