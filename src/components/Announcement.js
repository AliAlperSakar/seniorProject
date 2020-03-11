import React, { Component } from 'react'
import MainLayout from '../layouts/MainLayout'
import annoucementlogo from '../images/fotos/announcement.png'
import axios from "axios";
import "../css/announcement.css";
import { Link } from "react-router-dom";

export default class Announcement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            announcements: [],
            announcement: [],
            bool: false
        }
        this.getAnnouncement = this.getAnnouncement.bind(this);
    }

    componentDidMount() {
        axios.get("http://localhost:8081/announcements")
            .then(response => this.setState({
                announcements: response.data
            }))
       
    }

    // componentDidUpdate(prevState){
    //     if (prevState.bool) {
    //         axios.get("http://localhost:8081/announcements/" + this.props.location.pathname.split("/")[2])
    //             .then(response => this.setState({
    //                 announcement: response.data
    //             }))
    //         console.log(this.state.announcement);
            
    //     }
    // }

    getAnnouncement(){
        this.setState({
            bool:true
        });
    }

    render() {
        const { announcements } = this.state;
        const href = "/announcements/";
        // console.log(this.state.announcement);
        return (
            <div>
                <MainLayout />
                <div className="announcement">
                    <div className="announce" >
                        <img className='announcementlogo' src={annoucementlogo} />
                    </div >
                    <div className="announceTable">
                        <table className='table'>
                            <tbody>
                                <tr>
                                    <th> Content </th> <th > Date </th > </tr >
                                {announcements.map((x, index) =>
                                    <tr className='specialtr' key={index} onClick={console.log("SADAS")} >
                                        <td><Link to={href + index}>{x.text}</Link></td >
                                        <td>{x.date}</td></tr >
                                )
                                } </tbody>
                        </table >
                        <div className="detail">
                            Hello
                    </div>
                    </div>

                </div>
            </div>
        )
    }
}
