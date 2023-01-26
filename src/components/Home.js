import React, { useEffect, useState } from "react";

import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import { Link } from "react-router-dom";
import fetchFromSpotify, { request } from "../services/api";
import ConfigChoicesContainer from "./home/ConfigChoicesContainer";
import LoadingSpinner from "./shared/LoadingSpinner";

const AUTH_ENDPOINT =
    "https://nuod0t2zoe.execute-api.us-east-2.amazonaws.com/FT-Classroom/spotify-auth-token";
const TOKEN_KEY = "whos-who-access-token";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const Home = ({
    config,
    setConfig,
    setArtists,
    setSongs,
    setCorrectGuess,
    setRedirectFlag,
}) => {
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState(
        localStorage.getItem("selectedGenre") ?? ""
    );
    const [authLoading, setAuthLoading] = useState(false);
    const [genresLoading, setGenresLoading] = useState(false);
    const [token, setToken] = useState("");

    const classes = useStyles();

    const loadGenres = async (token) => {
        setGenresLoading(true);
        const response = await fetchFromSpotify({
            token,
            endpoint: "recommendations/available-genre-seeds",
        });
        console.log("Loaded genres:", response);
        setGenres(response.genres);
        setGenresLoading(false);
    };

    useEffect(() => {
        setArtists(), setSongs(), setCorrectGuess();
        setRedirectFlag(false);
        setAuthLoading(true);

        const storedTokenString = localStorage.getItem(TOKEN_KEY);
        if (storedTokenString) {
            const storedToken = JSON.parse(storedTokenString);
            if (storedToken.expiration > Date.now()) {
                console.log("Token found in localstorage");
                setAuthLoading(false);
                setToken(storedToken.value);
                loadGenres(storedToken.value);
                return;
            }
        }
        console.log("Sending request to AWS endpoint");
        request(AUTH_ENDPOINT).then(({ access_token, expires_in }) => {
            const newToken = {
                value: access_token,
                expiration: Date.now() + (expires_in - 20) * 1000,
            };
            localStorage.setItem(TOKEN_KEY, JSON.stringify(newToken));
            console.log(newToken.value);
            setAuthLoading(false);
            setToken(newToken.value);
            loadGenres(newToken.value);
        });
    }, []);

    if (authLoading || genresLoading) {
        return <LoadingSpinner />;
    }

    const getSongs = async ({ _artists, _correctIdx }) => {
        let _tracks;
        let response;
        response = await fetchFromSpotify({
            token,
            endpoint: `artists/${_artists[_correctIdx].id}/top-tracks?market=US`,
        });
        _tracks = response.tracks.filter((x) => x.preview_url !== null);
        _tracks = _tracks.slice(0, config.qtySongs);
        if (_tracks.length < config.qtySongs) {
            const _correctIdx = Math.floor(Math.random() * config.qtyArtists);
            setCorrectGuess(_artists[_correctIdx].name);
            getSongs({_artists, _correctIdx})
        }
        setSongs(_tracks);
    };

    const getArtists = async () => {
        let _tracks = [];
        let response;
        while (_tracks.length < config.qtyArtists) {
            response = await fetchFromSpotify({
                token,
                endpoint: `recommendations?limit=${
                    config.qtyArtists * 3
                }&market=US&seed_genres=${config.selectedGenre}`,
            });
            _tracks = response.tracks.filter((x) => x.preview_url !== null);
        }
        console.log("getArtists tracks:", _tracks);
        const _artists = [];
        for (const x of _tracks.slice(0, config.qtyArtists)) {
            _artists.push({
                name: x.artists[0].name,
                id: x.artists[0].id,
            });
        }
        setArtists(_artists);
        const _correctIdx = Math.floor(Math.random() * config.qtyArtists);
        setCorrectGuess(_artists[_correctIdx].name);
        return { _artists, _correctIdx };
    };

    const saveConfig = () => {
        localStorage.setItem("selectedGenre", selectedGenre);
        localStorage.setItem("qtyArtists", config.qtyArtists);
        localStorage.setItem("qtySongs", config.qtySongs);
    };

    const handlePlay = async () => {
        saveConfig();
        getSongs(await getArtists());
    };

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Guessing Game</h1>
            <p>
                Select a musical genre, quantity of song samples, and quantity
                of choices to guess from.{" "}
            </p>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                    Genre
                </InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={selectedGenre}
                    onChange={(event) => {
                        setSelectedGenre(event.target.value);
                        setConfig({
                            ...config,
                            selectedGenre: event.target.value,
                        });
                    }}
                    label="Genre"
                >
                    <MenuItem value={localStorage.getItem("selectedGenre")}>
                        <em>{localStorage.getItem("selectedGenre")}</em>
                    </MenuItem>
                    {genres.map((genre) => (
                        <MenuItem key={genre} value={genre}>
                            {genre}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <h3>Number of Songs</h3>
            <ConfigChoicesContainer
                min={1}
                config={config}
                setConfig={setConfig}
                type="songs"
            />
            <h3>Number of Choices</h3>
            <ConfigChoicesContainer
                min={2}
                config={config}
                setConfig={setConfig}
                type="artists"
            />

            <Box display="flex" justifyContent="center" alignItems="center">
                <Button
                    component={Link}
                    to="/guess"
                    onClick={() => handlePlay()}
                    disabled={selectedGenre === ""}
                    variant="contained"
                    color="primary"
                    style={{
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: "4rem",
                        width: "10rem",
                    }}
                >
                    Play!
                </Button>
            </Box>
        </div>
    );
};

export default Home;
