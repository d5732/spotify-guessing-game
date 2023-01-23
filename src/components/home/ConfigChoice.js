import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
    padding: 1rem;
`

const ConfigChoice = ({number, config, setConfig, type }) => {

    const handleClick = (e) => {
        if (type === 'artists') {
            setConfig({...config, qtyArtists: number})
        }
        else {
            setConfig({...config, qtySongs: number})
        }

    }

    return <Button disabled={type === 'artists' ? config.qtyArtists === number : config.qtySongs === number} onClick={handleClick}>{number}</Button>;
};

export default ConfigChoice;
