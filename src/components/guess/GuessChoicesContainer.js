import React from "react";
import GuessChoice from "./GuessChoice";

//used in guess and result
const GuessChoicesContainer = ({artists, setGuess}) => {
    return (
      <div>
        {artists[0] && <GuessChoice artist={artists[0].name} setGuess={setGuess}/>}
        {artists[1] && <GuessChoice artist={artists[1].name} setGuess={setGuess}/>}
        {artists[2] && <GuessChoice artist={artists[2].name} setGuess={setGuess}/>}
        {artists[3] && <GuessChoice artist={artists[3].name} setGuess={setGuess}/>}
      </div>
    );
};

export default GuessChoicesContainer;
