import React from "react";
import Box from "@material-ui/core/Box";

const Result = ({ artist, correctGuess, guess }) => {
    let guessStyles;
    let emoji;

    if (correctGuess === artist) {
        guessStyles = { backgroundColor: "#48E100" };
        emoji = "✔️"
    } else if (guess === artist) {
        guessStyles = { backgroundColor: "red" };
        emoji = "❌"
    } else {
        guessStyles = {
          backgroundColor: "#63adf2",
          boxShadow: 'none'
        };
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
            {artist}{emoji && ` ${emoji}`}
        </Box>
    );
};

export default Result;
