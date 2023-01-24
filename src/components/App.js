import React, { useState } from "react";
import { Route } from "react-router-dom";
import Guess from "./Guess";
import Home from "./Home";
import Result from "./Result";

const App = () => {
    const [artists, setArtists] = useState([]);
    const [config, setConfig] = useState({
        selectedGenre: localStorage.getItem("selectedGenre"),
        qtySongs: Number(localStorage.getItem("qtySongs")) || 1,
        qtyArtists: Number(localStorage.getItem("qtyArtists")) || 2,
    });

    const homeProps = { config, setConfig };

    return (
        <div>
            <Route exact path="/">
                <Home {...homeProps} />
            </Route>
            <Route exact path="/guess">
                <Guess {...homeProps} />
            </Route>
            <Route exact path="/result">
                <Result />
            </Route>
        </div>
    );
};

export default App;
