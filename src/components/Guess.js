import React from "react";
import Box from "@material-ui/core/Box";
import PlayAudiosContainer from "./guess/PlayAudiosContainer";
import GuessChoicesContainer from "./guess/GuessChoicesContainer";
import Volume from "./guess/Volume";

const Guess = ({ artists, songs, setGuess }) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Can you guess the artist?</h1>
      <Box display="flex" justifyContent="center" alignItems="center">
        {songs && <PlayAudiosContainer songs={songs} />}
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" style={{margin: "2rem"}}>
        <Volume />
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        {artists && (
          <GuessChoicesContainer artists={artists} setGuess={setGuess} />
        )}
      </Box>
      {/* <button
                onClick={() => console.log("songs", songs, "artists", artists)}
            >
                debug
            </button> */}
    </div>
  );
};

export default Guess;
