import React, { Component } from "react";
import Header from './Header';
import Body from './Body';

import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <>
                <Header/>
                <Body/>
            </>
        );
    }
}

export default App;