import React from "react";
const Guess = ({ config, setArtists, setCorrectChoice }) => {
    const getArtists = async (config) => {
        const response = await fetchFromSpotify({
            token,
            endpoint: `recommendations?limit=${config.qtyArtists}&market=ES&seed_genres=${config.selectedGenre}`,
        });
        console.log(response);
        // todo: set app-level states with passed props from parent (app)
        
    };

    return <div>Game</div>;
};

export default Guess;
