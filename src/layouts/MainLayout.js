import React, { Component } from "react";
import '../css/mainLayout.css';
import bilkentuniversity from '../images/fotos/bilkentuniversity.png'
import 'react-awesome-slider/dist/styles.css';
import bilkentImage from '../images/bilkentImage.png';
import {Link} from "react-router-dom";

function ElementList(props) {
    const element = props.elements;
    const listItems = element.map((element) =>
        <li key={element.toLowerCase()} className="li">
            <Link to={element.toLowerCase()} className="a">{element}</Link>
        </li>
    );
    return (
        <ul className="list">{listItems}</ul>
    );
}

const elements = ["Courses", "Reservations", "Tournaments", "Announcements"];

class MainLayout extends Component {
    constructor() {
        super();

    }

    render() {

        return (
            <div>
                <div className="megamenu">
                    <div className="container">
                        {/* <img className="site-logo2" src={bilkentuniversity} /> */}
                        <Link to="/"><img className="site-logo" src={bilkentImage} /></Link>
                        <ElementList elements={elements} />
                    </div>
                </div>
            </div>
        )
    }
}

export default MainLayout;