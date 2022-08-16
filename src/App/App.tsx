import React from "react";
import { Provider } from "react-redux";
import {store} from "../state/store";
const providerProps = {
    store
}
const App = () => {
    return (
        <Provider {...providerProps}>
            <h1>Hello world</h1>
        </Provider>
    );
}

export default App;