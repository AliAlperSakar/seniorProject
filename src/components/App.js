import React, { Component } from "react";
import MainLayout from "../layouts/MainLayout";
import Login from "../components/Login";
import '../css/Main.css';

class App extends Component {
    constructor() {
        super();
    }


    render() {
        return (
            <div className="main">
                <MainLayout />
                {/* <Login /> */}
            </div>
        )
    }
}

export default App;