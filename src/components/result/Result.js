import React from "react";
import Box from "@material-ui/core/Box";


const Result = ({ artist, correctGuess, guess }) => {
    let guessStyles;

    if(correctGuess === artist){
        guessStyles={backgroundColor: 'green'}
    } else if (guess === artist) {
        guessStyles={backgroundColor: 'red'}
    } else {
        guessStyles = { backgroundColor: "#3f51b5" };
    }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius={5}
      color="#fff"
      boxShadow={2}
      px={2}
      py={.75}
      style={{width: "10rem", ...guessStyles}}
    >
      {artist}
    </Box>
  );
};

export default Result;
