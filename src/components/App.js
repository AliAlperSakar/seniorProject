import React, { Component } from "react";
import MainLayout from "../layouts/MainLayout";
import Login from "../components/Login";


class App extends Component{
    constructor(){
        super();
        
    }


    render(){
        return(
            <div>
            <Login/>
            </div>
        )
    }
}

export default App;