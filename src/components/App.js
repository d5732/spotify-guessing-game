import React, { useState } from "react";
import { Route } from "react-router-dom";

import Home from "./Home";

const App = () => {
    const [songs, setSongs] = useState([]);
    return (
        <div>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/guess" component={Guess} /> */}
            {/* <Route exact path="/result" component={Result} /> */}
        </div>
    );
};

export default App;
