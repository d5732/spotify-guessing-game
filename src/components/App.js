import React, { useState } from "react";
import { Route } from "react-router-dom";
import Guess from "./Guess";
import Home from "./Home";
import Result from "./Result";

const App = () => {
    const [artists, setArtists] = useState([]);
    const [correctArtist, setCorrectArtist] = useState();
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
        setCorrectArtist,
    };
    const guessProps = { artists, songs, setGuess };
    const resultProps = { artists, correctArtist, guess };

    return (
        <div>
            <Route exact path="/">
                <Home {...homeProps} />
            </Route>
            <Route exact path="/guess">
                <Guess {...guessProps} />
            </Route>
            <Route exact path="/result">
                <Result {...resultProps} />
            </Route>
        </div>
    );
};

export default App;
