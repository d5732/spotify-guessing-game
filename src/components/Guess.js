import React from "react";
import Box from "@material-ui/core/Box";
import PlayAudiosContainer from "./guess/PlayAudiosContainer";
import GuessChoicesContainer from "./guess/GuessChoicesContainer";
import Volume from "./guess/Volume";

const Guess = ({ config, artists, songs, setGuess }) => {
  return (
    <div>
      {songs?.length !== config.qtySongs &&(
        <div>Loading...</div>
      )}
      {songs?.length === config.qtySongs && (
        <>
          <h1 style={{ textAlign: "center" }}>Can you guess the artist?</h1>
          <Box display="flex" justifyContent="center" alignItems="center">
            <PlayAudiosContainer songs={songs} />
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{ margin: "2rem" }}
          >
            {songs && <Volume />}
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            {artists && (
              <GuessChoicesContainer artists={artists} setGuess={setGuess} />
            )}
          </Box>
        </>
      )}
    </div>
  );
};

export default Guess;
