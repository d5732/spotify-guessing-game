import React from "react";
import ConfigChoice from "./ConfigChoice";

import Box from "@material-ui/core/Box";

const ConfigChoicesContainer = ({ min, config, setConfig, type }) => {

    const configChoiceProps = { config, setConfig, type }

    return (
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
            {[min, ++min, ++min].map(x => {return <ConfigChoice key={type + x} number={x} {...configChoiceProps} />})}
        </Box>

    );
};

export default ConfigChoicesContainer;
