import React from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

import { Link } from "react-router-dom";
import ResultsContainer from "./result/ResultsContainer";

const Results = ({ artists, correctGuess, guess }) => {
    return (
      <div>
        <Box display="flex" justifyContent="center" alignItems="center">
          <h1 style={{ textAlign: "center" }}>
            {correctGuess === guess ? "Nice guess!" : "Better luck next time."}
          </h1>
        </Box>
        <ResultsContainer
          artists={artists}
          correctGuess={correctGuess}
          guess={guess}
        />
        <Box display="flex" justifyContent="center" alignItems="center" m={5}>
          <Button component={Link} to="/" variant="contained" color="primary">
            Home
          </Button>
        </Box>
      </div>
    );
};

export default Results;
