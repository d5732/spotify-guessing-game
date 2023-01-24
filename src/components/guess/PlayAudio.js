import React from "react";
import styled from "styled-components";

const PlayButton = styled.button`
    padding: 1rem;
`

const PlayAudio = ({mp3}) => {
    return (
        <PlayButton> 
            <audio controls>
                <source src={mp3} type="audio/mp3" />
            </audio> 
        </PlayButton>
    );
};

export default PlayAudio;
