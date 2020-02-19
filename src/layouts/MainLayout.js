import React, { Component } from "react";
// import Navbar from '../organisms/Navbar';
import '../css/MainLayout.css';
// import Menu from '../organisms/Menu';
import Menu from '../organisms/newMenu';
import bilsportlogo from '../images/fotos/bilsportlogo.png';
import Bbuilding from '../images/fotos/Bbuilding.jpg'
import AwesomeSlider from 'react-awesome-slider';
import sportcenter from '../images/fotos/sportcenter.jpg'
import 'react-awesome-slider/dist/styles.css';



const slider = (
    <AwesomeSlider>
        <div data-src={bilsportlogo} />
        <div data-src={Bbuilding} />
        <div data-src={sportcenter} />
    </AwesomeSlider>
);

class MainLayout extends Component {
    constructor() {
        super();

    }

    render() {
        let img = React.createElement("img", { href: '../images/fotos/bilsport.png' });

        return (
            <div>
                <Menu />
                <div className="content">
                    {/* <div className="img">
                        <img src={bilsportlogo}/>
                    </div> */}
                    <div className="img">
                        {slider}
                    </div>
                    <div className="announcement">
                        Beden Eğitim ve Spor Merkezi  
                        Beden Eğitimi ve Spor Merkezi’nin misyonu, Bilkent Üniversitesi öğrencilerine sağlıklı yaşam alışkanlıkları kazandıracak ortamı hazırlamak, kampüs yaşantısını zenginleştirmek ve kaliteli beden eğitimi, spor ve kondisyon programları düzenleyerek öğrencilere hayat boyu kullanabilecekleri spor becerileri kazandırmaktır.
                        2020 Bahar yarıyılı kayıtları, Beden Eğitimi ve Spor Merkezi’nde, 3-9 Şubat 2020 tarihleri arasında yapılacaktır.
                        Kurslarımız 10 Şubat 2020’de başlayacak, 3 Mayıs 2020’de sona erecektir.
                    </div>
                </div>
                {/* <div className="menu">
                    <Menu title='Title'/>
                </div>
                <div className="navBar">
                    <Navbar />
                </div>
                <div className="content">
                    Contents
                </div> */}

            </div>
        )
    }
}

export default MainLayout;