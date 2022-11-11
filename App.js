import React from 'react';
import AppBody from "./AppBody";
import Store from "./src/store/index"
import { createStore } from "redux";
import {Provider} from "react-redux";

const App = () => {
    const store = Store
    return (
            <AppBody store={store}/>
    );
};

export default App;
