import React from "react";
import ConfigChoice from "./ConfigChoice";

const ConfigChoicesContainer = ({ min, config, setConfig, type }) => {

    const configChoiceProps = { config, setConfig, type }

    return (
        <div>{[min, ++min, ++min].map(x => {return <ConfigChoice key={type + x} number={x} {...configChoiceProps} />})}</div>
    );
};

export default ConfigChoicesContainer;
