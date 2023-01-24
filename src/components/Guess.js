import React from "react";
import styled from "styled-components";

const Guess = ({ artists, songs, setGuess }) => {

    

    return (
        <div>
            Game
            <button onClick={() => console.log("songs", songs, "artists", artists)}>debug</button>
        </div>
    );
};

export default Guess;
