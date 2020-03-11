import React, { Component } from 'react';
import MainLayout from '../layouts/MainLayout';
import "../css/tournaments.css";
import basketbol from '../images/sporticons/basketball.png'
import futbol from '../images/sporticons/futboll.png'
import voleybol from '../images/sporticons/voleybol.png'
import racket from '../images/sporticons/racket.png'

class Tournament extends Component {
    render() {
        return (
            <div>
                <MainLayout/>
                <div className="tourmain">
                    <img className='basketbol' src={basketbol} />
                    <img className='futbol' src={futbol} />
                    <img className='voleybol' src={voleybol} />
                    <img className='racket' src={racket} />
                </div>
            </div>
        );
    }
}

export default Tournament;