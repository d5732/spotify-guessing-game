import React from "react";
const Guess = ({ config, setArtists, setCorrectChoice }) => {
    const getArtists = async (config) => {
        const response = await fetchFromSpotify({
            token,
            endpoint: `recommendations?limit=4&market=ES&seed_genres=${selectedGenre}`,
            // endpoint: `recommendations?limit=${choiceLimit}&market=ES&seed_genres=${selectedGenre}`
        });
        console.log(response);
        // todo: set app-level states with passed props from parent (app)
    };

    return <div>Game</div>;
};

export default Guess;
