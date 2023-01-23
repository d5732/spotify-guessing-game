import React, { useState, createContext } from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Guess from "./Guess";
import Result from "./Result";

const App = () => {
    const [artists, setArtists] = useState([]);
    const [config, setConfig] = useState({
        selectedGenre: undefined,
        qtySongs: 1,
        qtyArtists: 2
    });

    const homeProps = { config, setConfig };

    return (
        <div>
            <Route exact path="/">
                <Home {...homeProps} />
            </Route>
            <Route exact path="/guess">
                <Guess />
            </Route>
            <Route exact path="/result">
                <Result />
            </Route>
        </div>
    );
};

export default App;
