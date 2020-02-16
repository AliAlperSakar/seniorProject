import React, { Component } from "react";
import Navbar from '../organisms/Navbar';
import'../css/MainLayout.css';
import Menu from '../organisms/Menu';
class MainLayout extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div>
                <div className="menu">
                    <Menu />
                </div>
                <div className="navBar">
                    <Navbar />
                </div>
                <div className="content">
                    Contents
                </div>
              
            </div>
        )
    }
}

export default MainLayout;