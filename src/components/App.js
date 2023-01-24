import React, { useState } from "react";
import Container from "@material-ui/core/Container";

import { Route } from "react-router-dom";
import Guess from "./Guess";
import Home from "./Home";
import Results from "./Results";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createTheme({
    palette: {
        primary: {
            light: "#000",
            main: "#63adf2",
            dark: "#3B6FC8",
            contrastText: "#fff",
        },
        secondary: {
            light: "#000",
            main: "#3f51b5",
            dark: "#002884",
            contrastText: "#fff",
        },
        warning: {
            light: "#000",
            main: "#8b1e3f",
            dark: "#002884",
            contrastText: "#fff",
        },
    },
});

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
        <div style={{ display: "flex", height: "100vh" }}>
            <ThemeProvider theme={theme}>
                <Container
                    maxWidth="sm"
                    style={{ marginTop: "auto", marginBottom: "auto" }}
                >
                    <Route exact path="/">
                        <Home {...homeProps} />
                    </Route>
                    <Route exact path="/guess">
                        <Guess {...guessProps} />
                    </Route>
                    <Route exact path="/results">
                        <Results {...resultProps} />
                    </Route>
                </Container>
            </ThemeProvider>
        </div>
    );
};

export default App;
