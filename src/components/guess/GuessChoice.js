import React from "react";
import { Link } from "react-router-dom";

const GuessChoice = ({artist, setGuess}) => {

return (
  <Link to="/results" onClick={() => setGuess(artist)}>
    {artist}
  </Link>
);};

export default GuessChoice;
