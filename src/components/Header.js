import React, { Component } from "react";
import ActiveBox from '../img/ActiveBox.png'

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="wrapper">
                    <div className="container-fluid no-padding">
                        <div className="row">
                            <div className="col-3">
                                <img src={ActiveBox} className="logo" />
                            </div>                            
                            <div className="col-7 ml-auto">
                                <nav>
                                    <ul className="menu d-flex animated fadeInDown">
                                        <li className="menu__item">
                                            <a href="#">
                                                FEATURES
                                            </a>
                                        </li>
                                        <li className="menu__item">
                                            <a href="#">
                                                WORKS
                                            </a>
                                        </li>
                                        <li className="menu__item">
                                            <a href="#">
                                                OUR TEAM
                                            </a>
                                        </li>
                                        <li className="menu__item">
                                            <a href="#">
                                                TESTIMONIALS
                                            </a>
                                        </li>
                                        <li className="menu__item">
                                            <a href="#">
                                                DOWNLOAD
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>               
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;