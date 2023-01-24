import React, { useState } from "react";
import { Route } from "react-router-dom";
import Guess from "./Guess";
import Home from "./Home";
import Results from "./Results";

const App = () => {
    const [artists, setArtists] = useState([]);
    const [correctGuess, setCorrectGuess] = useState();
    const [guess, setGuess] = useState();
    const [songs, setSongs] = useState();
    const [config, setConfig] = useState({
        selectedGenre: localStorage.getItem("selectedGenre"),
        qtySongs: Number(localStorage.getItem("qtySongs")) || 1,
        qtyArtists: Number(localStorage.getItem("qtyArtists")) || 2,
    });

    const homeProps = {
        config,
        setConfig,
        setArtists,
        setSongs,
        setCorrectGuess,
    };
    const guessProps = { artists, songs, setGuess };
    const resultProps = { artists, correctGuess, guess };

    return (
        <div>
            <Route exact path="/">
                <Home {...homeProps} />
            </Route>
            <Route exact path="/guess">
                <Guess {...guessProps} />
            </Route>
            <Route exact path="/results">
                <Results {...resultProps} />
            </Route>
        </div>
    );
};

export default App;
