import React, { Component } from "react";
import fb from '../img/fb.png';
import tw from '../img/tw.png';
import LinkedIn from '../img/LinkedIn.png';


class Footer extends Component {

    render() {
        return (
           <footer className="footer">
               <div className="footer-wrapper">
               <div className="container-fluid top-container">
                    <div className="row d-flex">
                        <div className="col-12 offset-md-1 col-md-3 column">
                            <div className="title">LOCATION</div>
                            <div className="text">3481 Melrose Place Beverly Hills, CA 90210</div>
                        </div>
                        <div className="col-12 offset-md-1 col-md-2 column">
                            <div className="title">SHARE WITH LOVE</div>
                            <div className="socials d-flex">
                                <div className="social"><img src={fb}></img></div>
                                <div className="social"><img src={tw}></img></div>
                                <div className="social"><img src={LinkedIn}></img></div>                             
                            </div>
                        </div>
                        <div className="col-12 col-md-4 column">
                            <div className="title">ABOUT ACTIVEBOX</div>
                            <div className="text">
                                Cras justo odio, dapibus ac facilisis in, egestas eget quam. 
                                Donec ullamcorper nulla non metus auctor fringilla.
                            </div>
                        </div>
                    </div>
                </div>                
               </div> 
               <div className="container-fluid bottom-container">
                    <div className="row">
                        <div className="col-12 offset-md-4 col-md-4">
                            <div className="top-line">Copyright © 2015 ActiveBox. All Rights Reserved</div> 
                            <div className="bottom-line">
                                Made with <span className="heart">♥</span> <span>by Kamal Chaneman</span>
                            </div>
                        </div>
                    </div>
                </div>               
           </footer>
        );
    }
}


export default Footer
