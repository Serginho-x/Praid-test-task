import React, { Component } from "react";
import ActiveBox from '../img/ActiveBox.png';
import { connect } from 'react-redux';
import {getBlocks} from '../store/actions';

class Header extends Component {

    componentDidMount() {
         this.props.getBlocks();        
    } 

    render() {
        return (
            <header className="header">
                <div className="wrapper-header">
                    <div className="container-fluid container-md no-padding header-underline">
                        <div className="row ">
                            <div className="col-xl-3 activeBox">
                                <img src={ActiveBox} className="logo" />
                            </div>                            
                            <div className="col-xl-7 ml-auto">
                                <nav>
                                    <ul className="menu">
                                        <li className="menu__item">
                                            <a href="">
                                                FEATURES
                                            </a>
                                        </li>
                                        <li className="menu__item">
                                            <a href="">
                                                WORKS
                                            </a>
                                        </li>
                                        <li className="menu__item">
                                            <a href="">
                                                OUR TEAM
                                            </a>
                                        </li>
                                        <li className="menu__item">
                                            <a href="">
                                                TESTIMONIALS
                                            </a>
                                        </li>
                                        <li className="menu__item">
                                            <a href="">
                                                DOWNLOAD
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>               
                    </div>
                    <div className="container-fluid header-text-wrapper">
                        <div className="row">
                            <div className="col-xl-10 header-title">                               
                                YOUR FAVORITE ONE PAGE MULTI PURPOSE TEMPLATE
                            </div>   
                            <div className="col-xl-10 header-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna vel scelerisque nisl consectetur et.
                            </div>       
                        </div>                       
                    </div>
                    <div className="container-fluid header-button-wrapper">
                        <div className="row">
                            <div className="header-button" onClick={() => this.props.getBlocks()}>
                                FIND OUT MORE
                            </div>                           
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
      getBlocks: () => dispatch(getBlocks())    
    }
  }

export default connect(
    null,
    mapDispatchToProps
)(Header)
