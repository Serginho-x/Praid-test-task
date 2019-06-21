import React, { Component } from "react";
import { connect } from 'react-redux';
import Layer19 from '../img/Layer19.png';
import Layer30 from '../img/Layer30.png';
import Layer31 from '../img/Layer31.png';
import Layer32 from '../img/Layer32.png';
import Layer33 from '../img/Layer33.png';
import Layer35 from '../img/Layer35.png';
import Layer36 from '../img/Layer36.png';
import Layer37 from '../img/Layer37.png';
import Layer38 from '../img/Layer38.png';
import Layer39 from '../img/Layer39.png';
import Layer40 from '../img/Layer40.png';
import Layer41 from '../img/Layer41.png';
import Layer42 from '../img/Layer42.png';
import fb from '../img/fb.png';
import tw from '../img/tw.png';
import LinkedIn from '../img/LinkedIn.png';

class Body extends Component {
    
    render() {
        const {visibleBlocks} = this.props;
        return (
            <>
            <div className="body">
                <div className="wrapper-block">
                    <div className="container-fluid block-container">
                        <div className="row">
                        { visibleBlocks && visibleBlocks.map((block, index) => (
                             <div key={index} className="col-12 col-xl-4 block">
                                 <img src={block.thumbnailUrl}></img>
                                 <div className="title">{block.title}</div>
                                 <div className="text">
                                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus
                                    eget urna mollis ornare vel eu leo. Donec ullamcorper nulla
                                  </div>
                             </div>
                            ))
                        }
                        </div>
                    </div>
                </div>
                <div className="container-fluid projects-table">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-xl-3 project" >
                            <img src={Layer35} ></img>
                            <div className="hover">
                                <div className="text">
                                    <div className="title">
                                        Project name
                                    </div>
                                    User Interface Design
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-3 project">
                            <img src={Layer36}></img>
                            <div className="hover">
                                <div className="text">
                                    <div className="title">
                                        Project name
                                    </div>
                                    User Interface Design
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-3 project">
                            <img src={Layer37}></img>
                            <div className="hover">
                                <div className="text">
                                    <div className="title">
                                        Project name
                                    </div>
                                    User Interface Design
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-3 project">
                            <img src={Layer38}></img>
                            <div className="hover">
                                <div className="text">
                                    <div className="title">
                                        Project name
                                    </div>
                                    User Interface Design
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-6 col-xl-3 project">
                            <img src={Layer39}></img>
                            <div className="hover">
                                <div className="text">
                                    <div className="title">
                                        Project name
                                    </div>
                                    User Interface Design
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-3 project">
                            <img src={Layer40}></img>
                            <div className="hover">
                                <div className="text">
                                    <div className="title">
                                        Project name
                                    </div>
                                    User Interface Design
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-3 project">
                            <img src={Layer41}></img>
                            <div className="hover">
                                <div className="text">
                                    <div className="title">
                                        Project name
                                    </div>
                                    User Interface Design
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-3 project">
                            <img src={Layer42}></img>
                            <div className="hover">
                                <div className="text">
                                    <div className="title">
                                        Project name
                                    </div>
                                    User Interface Design
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wrapper-team">
                    <div className="container-fluid team-container">
                        <div className="row">
                            <div className="col-12 col-md-6 col-xl-3 team">
                                <div className="info">
                                    <img src={Layer30}></img>
                                    <div className="title">
                                        Ruth Woods
                                        <div className="sub-title">FOUNDER, CEO</div>
                                    </div>
                                    <div className="text">
                                        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
                                        ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius
                                        blandit sit amet non magna. Nullam quis risus aget urna mollis ornare vel eu leo.
                                    </div>
                                    <div className="socials d-flex">
                                        <div className="social"><img src={fb}></img></div>
                                        <div className="social"><img src={tw}></img></div>
                                        <div className="social"><img src={LinkedIn}></img></div>                             
                                    </div>
                                </div>                                
                            </div>
                            <div className="col-12 col-md-6 col-xl-3 team">
                                <div className="info">
                                    <img src={Layer31}></img>
                                    <div className="title">
                                        Timothy Reed
                                        <div className="sub-title">Co-FOUNDER, DEVELOPER</div>
                                    </div>
                                    <div className="text">
                                        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
                                        ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius
                                        blandit sit amet non magna. Nullam quis risus aget urna mollis ornare vel eu leo.
                                    </div>
                                    <div className="socials d-flex">
                                        <div className="social"><img src={fb}></img></div>
                                        <div className="social"><img src={tw}></img></div>
                                        <div className="social"><img src={LinkedIn}></img></div>                             
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-xl-3 team">
                                <div className="info">
                                    <img src={Layer32}></img>
                                    <div className="title">
                                        Victoria Valdez
                                        <div className="sub-title">UI DESIGNER</div>
                                    </div>
                                    <div className="text">
                                        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
                                        ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius
                                        blandit sit amet non magna. Nullam quis risus aget urna mollis ornare vel eu leo.
                                    </div>
                                    <div className="socials d-flex">
                                        <div className="social"><img src={fb}></img></div>
                                        <div className="social"><img src={tw}></img></div>
                                        <div className="social"><img src={LinkedIn}></img></div>                             
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-xl-3 team">
                                <div className="info">
                                    <img src={Layer33}></img>
                                    <div className="title">
                                        Beverly Little
                                        <div className="sub-title">DATA SCIENTIST</div>
                                    </div>
                                    <div className="text">
                                        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
                                        ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius
                                        blandit sit amet non magna. Nullam quis risus aget urna mollis ornare vel eu leo.
                                    </div>
                                    <div className="socials d-flex">
                                        <div className="social"><img src={fb}></img></div>
                                        <div className="social"><img src={tw}></img></div>
                                        <div className="social"><img src={LinkedIn}></img></div>                             
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid review-table">
                    <div className="row">
                        <div className="col-12 col-xl-6 no-padding">
                            <img src={Layer19} ></img>
                        </div>
                        <div className="col-12 col-xl-6 review" >
                           <div className="col-xl-9 title">
                                “Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
                                Donec sed odio dui. Aenean eu leo quam...”
                           </div>
                           <div className="text">
                                SUSAN SIMS, INTERACTION DESIGNER AT XYZ
                           </div>
                           <div className="review-toggle d-flex">
                               <div className="toggle"></div>
                               <div className="toggle active"></div>
                               <div className="toggle"></div>
                               <div className="toggle"></div>
                               <div className="toggle"></div>
                           </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-8 offset-2 download">
                            <div className="title">Are You Ready to Start? Download Now For Free!</div>
                            <div className="text">FUSCE DAPIBUS, TELLUS AC CURSUS COMMODO</div>
                            <div className="button">DOWNLOAD HERE</div>
                        </div>
                    </div>
                </div>
            </div>
            
            </>
        );
    }
}

const mapStateToProps = store => {
    return {
      visibleBlocks: store.reducers.visibleBlocks
  }
}

export default connect(mapStateToProps)(Body)
