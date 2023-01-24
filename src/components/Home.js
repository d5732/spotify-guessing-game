import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import fetchFromSpotify, { request } from "../services/api";
import ConfigChoicesContainer from "./home/ConfigChoicesContainer";

const AUTH_ENDPOINT =
    "https://nuod0t2zoe.execute-api.us-east-2.amazonaws.com/FT-Classroom/spotify-auth-token";
const TOKEN_KEY = "whos-who-access-token";

const Home = ({
    config,
    setConfig,
    setArtists,
    setSongs,
    setCorrectGuess,
}) => {
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState(
        localStorage.getItem("selectedGenre") ?? ""
    );
    const [authLoading, setAuthLoading] = useState(false);
    const [genresLoading, setGenresLoading] = useState(false);
    const [configLoading, setConfigLoading] = useState(false);
    const [token, setToken] = useState("");

    const loadGenres = async (token) => {
        setGenresLoading(true);
        const response = await fetchFromSpotify({
            token,
            endpoint: "recommendations/available-genre-seeds",
        });
        console.log(response);
        setGenres(response.genres);
        setGenresLoading(false);
    };

    const loadPreviousConfig = () => {
        setConfigLoading(true);
        // todo: implement
        setConfigLoading(false);
    };
    const saveCurrentConfig = () => {
        // todo: implement
    };

    useEffect(() => {
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
            // todo: load localStorage if there is an old config
        });
    }, []);

    if (authLoading || genresLoading) {
        return <div>Loading...</div>;
    }

    const getSongs = async (_artists, _correctIdx) => {
        let _tracks;
        let response;
        response = await fetchFromSpotify({
            token,
            endpoint: `artists/${_artists[_correctIdx].id}/top-tracks?market=US`,
            // artists/22bE4uQ6baNwSHPVcDxLCe/top-tracks?market=ES"
            // todo: limit? could network optimize if limit param can be used
        });
        _tracks = response.tracks.filter((x) => x.preview_url !== null);
        _tracks = _tracks.slice(0, config.qtySongs)
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
        console.log("123456789pizza", _tracks);
        const _artists = [];
        for (const x of response.tracks.slice(0, config.qtyArtists)) {
            _artists.push({
                name: x.artists[0].name,
                id: x.artists[0].id,
            });
        }
        setArtists(_artists);
        const _correctIdx = Math.floor(Math.random() * config.qtyArtists);
        setCorrectGuess(_artists[_correctIdx].name);
        getSongs(_artists, _correctIdx);
    };

    const handlePlay = () => {
        //todo: proceed
        setConfig({ ...config, selectedGenre });
        localStorage.setItem("selectedGenre", selectedGenre);
        localStorage.setItem("qtyArtists", config.qtyArtists);
        localStorage.setItem("qtySongs", config.qtySongs);

        getArtists();
    };

    return (
        <div>
            <h1>Guessing Game</h1>
            <h3>Genre:</h3>
            <select
                value={selectedGenre}
                onChange={(event) => setSelectedGenre(event.target.value)}
            >
                <option value={localStorage.getItem("selectedGenre")}>
                    {localStorage.getItem("selectedGenre")}
                </option>
                {genres.map((genre) => (
                    <option key={genre} value={genre}>
                        {genre}
                    </option>
                ))}
            </select>

            <h3># Song Choices</h3>
            <ConfigChoicesContainer
                min={1}
                config={config}
                setConfig={setConfig}
                type="songs"
            />
            <h3># Artist Choices</h3>
            <ConfigChoicesContainer
                min={2}
                config={config}
                setConfig={setConfig}
                type="artists"
            />
            <Link to="/guess"
                onClick={() => handlePlay()}
                disabled={selectedGenre === ""}
            >
                Play!
            </Link>
            <button onClick={() => console.log(config, token)}>debug</button>
        </div>
        // todo: save current config to localStorage when proceeding to
        //  next page
    );
};

export default Home;
