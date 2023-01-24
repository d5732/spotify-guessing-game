import React from "react";
import Box from "@material-ui/core/Box";

const Result = ({ artist, correctGuess, guess }) => {
    let guessStyles;

    if (correctGuess === artist) {
        guessStyles = { backgroundColor: "#0b3c49" };
    } else if (guess === artist) {
        guessStyles = { backgroundColor: "red" };
    } else {
        guessStyles = { backgroundColor: "#3f51b5" };
    }

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderRadius={5}
            boxShadow={2}
            color="#fff"
            px={2}
            py={0.75}
            style={{
                width: "80%",
                textAlign: "center",
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                textTransform: "uppercase",
                fontSize: "0.875rem",
                fontWeight: "500",
                lineHeight: "1.75",
                letterSpacing: "0.02857em",
                ...guessStyles,
            }}
        >
            {artist}
        </Box>
    );
};

export default Result;
