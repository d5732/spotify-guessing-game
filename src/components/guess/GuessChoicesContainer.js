import React from "react";
import GuessChoice from "./GuessChoice";
import Box from "@material-ui/core/Box";

//used in guess and result
const GuessChoicesContainer = ({artists, setGuess}) => {
    return (
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexDirection="column"
          style={{gap: "1rem"}}
        >
          {artists[0] && <GuessChoice artist={artists[0].name} setGuess={setGuess}/>}
          {artists[1] && <GuessChoice artist={artists[1].name} setGuess={setGuess}/>}
          {artists[2] && <GuessChoice artist={artists[2].name} setGuess={setGuess}/>}
          {artists[3] && <GuessChoice artist={artists[3].name} setGuess={setGuess}/>}
        </Box>
    );
};

export default GuessChoicesContainer;
