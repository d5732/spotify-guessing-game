import React, { useEffect, useState } from "react";
import fetchFromSpotify, { request } from "../services/api";

const AUTH_ENDPOINT =
    "https://nuod0t2zoe.execute-api.us-east-2.amazonaws.com/FT-Classroom/spotify-auth-token";
const TOKEN_KEY = "whos-who-access-token";

const Home = ({
    config,
    setConfig,
    songs,
    setSongs,
    artists,
    setArtists,
    correctChoice,
    setCorrectChoice,
}) => {
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState("");
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
            setAuthLoading(false);
            setToken(newToken.value);
            loadGenres(newToken.value);
            // todo: load localStorage if there is an old config
        });
    }, []);

    if (authLoading || genresLoading || configLoading) {
        return <div>Loading...</div>;
    }

    const handlePlay = async (selectedGenre) => {
        const response = await fetchFromSpotify({
            token,
            endpoint: `recommendations?limit=4&market=ES&seed_genres=${selectedGenre}`,
            // endpoint: `recommendations?limit=${choiceLimit}&market=ES&seed_genres=${selectedGenre}`
        });
        console.log(response);
        // todo: set app-level states with passed props from parent (app)
    };

    return (
        <div>
            Genre:
            <select
                value={selectedGenre}
                onChange={(event) => setSelectedGenre(event.target.value)}
            >
                <option value="" />
                {genres.map((genre) => (
                    <option key={genre} value={genre}>
                        {genre}
                    </option>
                ))}
            </select>
            <button onClick={() => handlePlay(selectedGenre)}>Play!</button>
        </div>
        // todo: save current config to localStorage when proceeding to
        //  next page
    );
};

export default Home;
